var Cookie =  (function () {
    function Cookie(cookie) {
        this._cookie = cookie || document.cookie;
    }
    Cookie.tryGetCookie = function (cookieId) {
        return new Cookie().tryGetCookie(cookieId);
    };
    Cookie.setCookie = function (id, value, attributes) {
        document.cookie = this.buildCookie(id, value, attributes);
    };
    Cookie.buildCookie = function (id, value, attributes) {
        var cookieData = [];
        if (value.indexOf(' ') !== -1 || value.indexOf(',') !== -1 || value.indexOf(';') !== -1) {
            value = encodeURIComponent(value);
        }
        cookieData.push(id + "=" + value);
        if (attributes) {
            if (attributes.path) {
                cookieData.push("path=" + attributes.path);
            }
            if (attributes.domain) {
                cookieData.push("domain=" + attributes.domain);
            }
            if (attributes.maxAge) {
                cookieData.push("max-age=" + attributes.maxAge);
            }
            if (attributes.expires) {
                cookieData.push("expires=" + attributes.expires.toUTCString());
            }
            if (attributes.secure) {
                cookieData.push("secure");
            }
        }
        return cookieData.join('; ');
    };
    Cookie.prototype.tryGetCookie = function (cookieId) {
        var prefix = cookieId + '=';
        var keyValuePair = this._cookie
            .split(';') 
            .map(function (str) { return str.trim(); }) 
            .filter(function (str) { return str.indexOf(prefix) === 0; })[0]; 
        return keyValuePair ? keyValuePair.substr(prefix.length) : undefined;
    };
    return Cookie;
}());
export default Cookie;
