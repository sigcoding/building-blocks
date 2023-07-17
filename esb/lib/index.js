"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resend_1 = require("resend");
const dotenv = __importStar(require("dotenv-safe"));
const Template_1 = __importDefault(require("./templates/Template"));
dotenv.config();
const resend = new resend_1.Resend(process.env.RESEND_API_KEY);
const originEmail = process.env.ORIGIN_EMAIL;
const originName = process.env.ORIGIN_NAME;
const targetEmail = "igorducca@gmail.com";
(async function () {
    try {
        const data = await resend.emails.send({
            from: `${originName} <${originEmail}>`,
            to: [targetEmail],
            subject: "Hello World",
            react: (0, Template_1.default)({ targetEmail }),
        });
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
})();
