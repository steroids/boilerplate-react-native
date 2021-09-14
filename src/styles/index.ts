import getStyles from '@steroidsjs/native/style';
import customClasses from './customClasses';
import customVariables from './customVariables';

let { variables, classes } = getStyles(customVariables);

classes = {
    ...classes,
    ...customClasses(variables, classes),
};

export default {
    variables,
    classes,
};
