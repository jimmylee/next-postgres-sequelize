module.exports = function(options) {
  options = options ? options : {};
  const maxAge = options.maxAge ? options.maxAge : 86400;
  const includeSubDomains =
    options.includeSubDomains === undefined ? true : options.includeSubdomains;

  return function(req, res, next) {
    let ignoreRequest = process.env.NODE_ENV !== 'production';
    const secure =
      req.connection.encrypted || req.get('X-Forwarded-Proto') === 'https';

    if (options.ignoreFilter) {
      ignoreRequest = ignoreRequest || options.ignoreFilter(req);
    }

    if (ignoreRequest) {
      next();
      return;
    }

    if (secure) {
      let header = 'max-age=' + maxAge;
      if (includeSubDomains) {
        header += '; includeSubDomains';
      }

      if (options.preload) {
        header += '; preload';
      }

      res.setHeader('Strict-Transport-Security', header);
      next();
    } else {
      res.writeHead(301, {
        Location: 'https://' + req.get('host') + req.url,
      });
      res.end();
    }
  };
};
