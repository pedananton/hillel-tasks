import {toUSFormat} from "../utils/date.js";

export default function Employee(dto) {
    Object.assign(this, dto);

    this.dateOfBirth = new Date(dto.dateOfBirth);
}

Employee.prototype.toJSON = function () {
    return {
        ...this,

        dateOfBirth: toUSFormat(this.dateOfBirth),
    };
};

Employee.prototype[Symbol.toPrimitive] = function (hint) {
    switch (hint) {
        case 'string':
            return this.firstName + ' ' + this.lastName;
        case 'number':
        default:
            return this.empId;
    }

    return result;
};
