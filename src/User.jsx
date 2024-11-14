import PropTypes from 'prop-types';
const User = ({ user }) => {
    const { name, email, address } = user;

    return (
        <div style={{ border: '2px solid azure', borderRadius: '12px', margin: '10px', padding: '15px' }}>
            <h4>Name : {name}</h4>
            <h4><small>Email : {email}</small></h4>
            <h4>Address : {address.street}</h4>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
}

export default User;