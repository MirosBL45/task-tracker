import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <p className="footer_description">
        Motivated by{' '}
        <a
          href="https://www.youtube.com/c/TraversyMedia/videos"
          target="_blank"
          rel="noreferrer"
        >
          Traversy Media
        </a>
        , Coded by{' '}
        <a href="https://github.com/MirosBL45" target="_blank" rel="noreferrer">
          Miroslav Jovic
        </a>
      </p>
      <p>Copyright &copy; 2022</p>
      <p className="toActivate">
        To activate server with data, need db.json on port:5000
      </p>
      <p className="toActivate">
        <a
          href="https://task-tracker-build-mj.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Go to <b>builded</b> project without server
        </a>
      </p>
      <Link to={'/about'}>About</Link>
    </footer>
  );
}

export default Footer;
