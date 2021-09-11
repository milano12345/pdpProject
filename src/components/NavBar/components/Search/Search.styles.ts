import { makeStyles, alpha } from '@material-ui/core/styles';

const useStyles = makeStyles(
    ({ palette, spacing, breakpoints, transitions, shape }) => ({
        search: {
            position: 'relative',
            borderRadius: shape.borderRadius,
            backgroundColor: alpha(palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: alpha(palette.common.white, 0.25),
            },
            marginRight: spacing(2),
            marginLeft: 0,
            width: '100%',
            [breakpoints.up('sm')]: {
                marginLeft: spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: palette.secondary.main,
        },
        inputRoot: {
            color: palette.secondary.main,
        },
        inputInput: {
            padding: spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${spacing(4)}px)`,
            transition: transitions.create('width'),
            width: '100%',
            [breakpoints.up('md')]: {
                width: '100ch',
            },
            [breakpoints.down('md')]: {
                width: '50ch',
            },
            [breakpoints.down('sm')]: {
                width: '20ch',
            },
        },
        optionsList: {
            width: 200,
            margin: 0,
            padding: 0,
            zIndex: 1,
            position: 'absolute',
            listStyle: 'none',
            backgroundColor: palette.background.paper,
            overflow: 'auto',
            maxHeight: 200,
            border: '1px solid rgba(0,0,0,.25)',
            '& li[data-focus="true"]': {
                backgroundColor: '#4a8df6',
                color: 'white',
                cursor: 'pointer',
            },
            '& li:active': {
                backgroundColor: '#2977f5',
                color: 'white',
            },
        },
    })
);

export default useStyles;
