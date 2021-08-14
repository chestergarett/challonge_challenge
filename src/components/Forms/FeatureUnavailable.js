import CenteredModal from '../UI/Modals/CenteredModal';

const FeatureUnavailable = (props) => {

    return (
        <CenteredModal onClose={props.onClose}>
            <p style={{textAlign: 'center'}}> This feature is not yet available. </p>
        </CenteredModal>
    )
}

export default FeatureUnavailable;