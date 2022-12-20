export default (variables: any, classes: any) => ({
    ...classes,

    UIFormScreen: {
        paddingTop: 16,
        paddingBottom: 44,
    },

    UIFormScreen__container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 16,
    },

    UIFormScreen__text: {
        color: '#333333',
        fontSize: 16,
        fontWeight: '700',
    },
});
