import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    message:{
        display: "flex",
        paddingBottom: ".5rem",
        margin: "1rem",
        alignItems: "center",
        border: "none",
        boxShadow: "none",
    },
    sent:{
        flexDirection: "row-reverse",
    },
    
    received:{
        justifyContent: "flex-start",
    },
    messageText:{
        background: "#CFDBC5",
        borderBottomLeftRadius: "4px",
        borderTopRightRadius: "18px",
        marginLeft: ".5rem",
        paddingTop: ".5rem",
        paddingBottom: ".5rem",
        wordWrap: "break-word"
    },
    messageSent:{
        marginRight: ".5rem",
        background: "#DCDCDC",
    },
}));