import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ItInfrManagmentDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [linksOpen, setLinksOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

    const [previousLocation, setPreviousLocation] = useState('');
    useEffect(() => {
        if (previousLocation !== location.pathname) {
          setIsOpen(false);
        }
        setPreviousLocation(location.pathname);
      }, [location, previousLocation]);
      
      const handleCloseLinks = () => {
        setLinksOpen(false);
        props.dataAlert(linksOpen);
    };
  return (
    <div className={`link has-dropdown-menu ${isOpen ? 'open-dropdown-menu' : ''}`}>
      <a href="#" onClick={toggleDropdown}>IT Infr Mngmt</a>
      <ul className={`dropdown-menu list-unstyled ${isOpen ? 'open' : ''}`}>
      
      {/* <li><Link to='/ItTraining' className="dm-link" onClick={handleCloseLinks}>IT Training</Link></li>   */}
      </ul>
    </div>
  );
};

export default ItInfrManagmentDropdown;