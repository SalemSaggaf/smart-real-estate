const K_WIDTH = 200;
const K_HEIGHT = 300;

const AreaCardStyle = {
    position: 'absolute',
    width: K_WIDTH,
    height: K_HEIGHT,
    left: 0,
    top: 0,
    
    // border: '5px solid #f44336',
    borderRadius: 25,
    backgroundColor: '#b9bab987',
    padding: 4
}

const AreaCardHeaderStyle = {
    textAlign: 'center',
    color: '#22c96d',
    fontSize: 24,
    fontWeight: 'bold',
}

const AreaCardAreaSnippetStyle = {
    width: '90%',
    height: '150px',
    borderRadius: 25,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    margin: 'auto',
    border: '1px solid #20943e',
}

const AreaCardActionsStyle = {
    marginTop: '15%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
}



export {AreaCardStyle, AreaCardHeaderStyle, AreaCardAreaSnippetStyle, AreaCardActionsStyle};