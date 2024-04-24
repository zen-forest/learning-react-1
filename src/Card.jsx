import profilePic from './assets/prof.jpg';

function Card() {
  return(
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile photo" />
      <h2 className="card-title">Tim Collins</h2>
      <p className='card-text'>Designer and truck enthusiast</p>
    </div>
  );
};

export default Card;