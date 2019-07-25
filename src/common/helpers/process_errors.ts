import {FORM_ERROR} from "final-form";

export const processErrors = (errors: any) => {
    return Object.keys(errors).reduce(function (processed: any, key) {
        processed[key === 'non_field_errors' ? FORM_ERROR : key] = errors[key][0];
        return processed;
    }, {});
};
