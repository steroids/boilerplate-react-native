export default (variables, classes) => {
    classes = {
        ...classes,

        ButtonView: {},
        ButtonView__label: {},
        'ButtonView__label-text': {
            textAlign: 'center',
        },
    };

    return classes;
};
