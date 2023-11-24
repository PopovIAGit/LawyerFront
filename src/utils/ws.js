class WS {
  constructor (iface) {
    this.connection = null;
    this.callback = {};
    this.callid = 1;
    this.closed = false;
    if (iface) this.iface = iface;
    else this.iface = {};

    this.onServerError = (error) => {
      console.log(`ServerConnection - error: ${error}`);
    };
    this.onConnected = () => {
      console.log('SereverConnection - connected');
    };
    this.onError = (error) => {
      console.log(`SereverConnection - ws error: ${error}`);
      console.log(error);
    };

    this.onClose = () => {
      console.log('Connection closed');
    }
  }

  connect (url) {
    const promise = new Promise((resolve, reject) => {
      this.connection = new WebSocket(url);
      this.connection.binaryType = 'arraybuffer';

      this.connection.onmessage = (message) => {
        // console.log("Got message", message.data);

        try {
          if (typeof message.data === 'string') {
            const data = JSON.parse(message.data);

            switch (data.type) {
              case 'error':
              case 'answer':
                if (data.id in this.callback) {
                  const callback = this.callback[data.id];
                  delete this.callback[data.id];
                  if (data.type === 'error') {
                    if ('onerror' in callback) {
                      callback.onerror(data.args);
                    }
                    else {
                      this.onServerError(data.args);
                    }
                  }
                  else {
                    callback(data.args);
                  }
                }
                else {
                  this.onServerError(`Unknown callback: ${message.data}`);
                }

                break;

              case 'query':
                const core = async () => {
                  if (data.iface in this.iface) {
                    if (data.method in this.iface[data.iface]) {
                      try {
                        await this.iface[data.iface][data.method](this, data.id, data.args);
                      } catch (e) {
                        this.error(data.id, {error: e.message + ' ' + data.iface + '.' + data.method});
                      }
                    }
                    else {
                      this.error(data.id, {error: 'no method ' + data.iface + '.' + data.method});
                    }
                  }
                  else {
                    this.error(data.id, {error: 'no iface ' + data.iface});
                  }
                }

                core().catch((err) => {
                  this.error(0, {error: err.message});
                });

                break;
              default:
                break;
            }
          }
          else {
            if (this.iface.control && this.iface.control.streamData) {
              this.iface.control.streamData(message);
            }
            else console.log('no video handlers');
          }
        } catch (e) {
          console.error('Message from server error: ' + JSON.stringify(e));
          this.onError(e);
        }
      };

      this.connection.onopen = () => {
        this.onConnected();
        resolve();
      };

      this.connection.onerror = (err) => {
        this.onError(err);
        reject(err);
      };

      this.connection.onclose = () => {
        if (!this.closed) this.onClose();
      };
    });

    return promise;
  }

  disconnect () {
    this.closed = true;
    this.connection.close(1000, 'close');
  }

  call (_interface, _method, _args, _onresult, _onerror) {
    try {
      var _id = this.callid++;
      this.callback[_id] = _onresult;
      if (_onerror !== undefined) this.callback[_id]['onerror'] = _onerror;
      this.connection.send(JSON.stringify({type: 'query', iface: _interface, method: _method, id: _id, args: _args}));
    } catch (e) {
      this.onError(e);
    }
  }

  answer (_id, _args) {
    this.connection.send(JSON.stringify({type: 'answer', id: _id, args: _args}));
  }

  error (_id, _args) {
    this.connection.send(JSON.stringify({type: 'error', id: _id, args: _args}));
  }
}

export default WsClient;
