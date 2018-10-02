
export const mdlStyles = theme => ({
    layout: {
        width: 'auto',
        display: 'block', // Fix IE11 issue.
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px
                ${theme.spacing.unit}px 
                ${theme.spacing.unit * 2}px 
                ${theme.spacing.unit}px`
    }
});