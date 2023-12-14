class api {
  constructor(connection, defaultErrorHandler) {
    this.connection = connection;
    this.defaultErrorHandler = defaultErrorHandler;
    this.basic = {
      login: (loginName, password) => {
        // console.log('start login');
        return this.invoke("basic", "login", { loginName, password });
      },

      loginByToken: (token) => {
        return this.invoke("basic", "loginByToken", { token });
      },

      logout: () => {
        return this.invoke("basic", "logout", {});
      },
    };
  }

  invoke(interfaceName, methodName, args) {
    // console.log('start invoke');
    return new Promise((resolve, reject) => {
      // console.log(`inside promise: ${interfaceName}:${methodName}`);
      this.connection.call(
        interfaceName,
        methodName,
        args || {},
        (args) => {
          resolve(args);
        },
        (args) => {
          if (this.defaultErrorHandler) {
            this.defaultErrorHandler(args);
          }
          console.error(
            `${interfaceName}:${methodName} failed: ${JSON.stringify(args)}`
          );
          reject(args);
        }
      );
    });
  }
}

export default api;
