
const IconContainer = (props) => {
    return(
    <div style={{
        borderRadius: '50%', 
        background: '#2c2f33', 
        width: '4rem', 
        height: '4rem', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: '.5rem',
        marginLeft: '.3rem',
        cursor: 'pointer',
    }}
    >
        {props.children}
    </div>
    )
}


export default IconContainer