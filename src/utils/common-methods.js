/* eslint-disable import/no-extraneous-dependencies */
const httpStatus = require('http-status');
const moment = require('moment');

class CommonMethods {
    static successResponse(data, pagination) {
        return {
            code: httpStatus.OK,
            status: 'Success',
            data,
            pagination,
        };
    }

    static createdResponse(data, message) {
        return {
            code: httpStatus.CREATED,
            status: httpStatus[httpStatus.CREATED],
            data,
            message,
        };
    }

    static deletedResponse(message) {
        return {
            status: httpStatus.NO_CONTENT,
            message,
        };
    }

    static notFoundResponse(message) {
        return {
            code: httpStatus.NOT_FOUND,
            status: httpStatus[httpStatus.NOT_FOUND],
            message,
        };
    }

    static errorResponse(status, message) {
        return {
            code: status || httpStatus.BAD_REQUEST,
            status: httpStatus[status] || httpStatus[httpStatus.BAD_REQUEST],
            message,
        };
    }

    static conflictResponse(message) {
        return {
            code: httpStatus.CONFLICT,
            status: httpStatus[httpStatus.CONFLICT],
            message,
        };
    }

    static badResponse(message) {
        return {
            code: httpStatus.BAD_REQUEST,
            status: httpStatus[httpStatus.BAD_REQUEST],
            message,
        };
    }

    static unauthorizedResponse(message) {
        return {
            code: httpStatus.UNAUTHORIZED,
            status: httpStatus[httpStatus.UNAUTHORIZED],
            message,
        };
    }

    static noContentResponse() {
        return {
            code: httpStatus.NO_CONTENT,
            status: httpStatus[httpStatus.NO_CONTENT],
        };
    }

    static generateId(cnt) {
        const timestamp = moment().format('YYYYMMDDhhmm');
        const counter = cnt.toString().padStart(6, '0');
        const stringId = timestamp + counter;
        return stringId;
    }
}

module.exports = CommonMethods;
