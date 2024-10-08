import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar(props) {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: 'transparent',
    backdropFilter: 'blur(0px)',
    transition: 'background-color 0.2s, backdrop-filter 0.2s',
  });

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setNavbarStyle({
        backgroundColor: 'rgba(255, 255, 255, 0.129)',
        backdropFilter: 'blur(17px)',
        transition: 'background-color 0.3s, backdrop-filter 0.3s',
      });
      setIsScrolled(true);
    } else {
      setNavbarStyle({
        backgroundColor: 'transparent',
        backdropFilter: 'blur(0px)',
        transition: 'background-color 0.5s, backdrop-filter 0.5s',
      });
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const linkStyle = {
    textDecoration: 'none',
    color: isScrolled ? 'white' : 'black',
  };

  const liStyle = {
    display: isScrolled ? 'block' : 'none',
    padding: '10px 15px',
  };

  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // To programmatically navigate between pages

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      performSearch(searchQuery.toLowerCase());
    }
  };


  
  const performSearch = (query) => {
    //Search Data
    const elements = [
      //pages
      { id: 'العروض', page: '/Offers' },
      { id: 'عربة التسوق', page: '/ShoppingCart' },
      { id: 'عربة', page: '/ShoppingCart' },      
      { id: 'تسجيل الدخول', page: '/LogIn' },
      { id: 'تسجيل', page: '/LogIn' },
      { id: 'الحساب', page: '/LogIn' },
      { id: 'حسابي', page: '/LogIn' },
      { id: 'ملف', page: '/LogIn' },
      { id: 'ملفي', page: '/LogIn' },
      { id: 'اعدادات', page: '/Settings' },
      { id: 'الرئيسية', page: '/' },
      { id: 'منتجات', page: '#think_creative' },

/*
      { id: 'تسوق', page: '/think_creative' },
      { id: 'بذكاء', page: '/think_creative' },
      { id: 'بازاريا', page: '/think_creative' },
      { id: 'سقف', page: '/think_creative' },
      { id: 'الرئيسية', page: '/think_creative' },

      { id: 'الذكاء', page: '/#what_makes_us_unique' },
      { id: 'الاصطناعي', page: '/#what_makes_us_unique' },
      { id: 'توصيل', page: '/#what_makes_us_unique' },
      { id: 'صاروخ', page: '/#what_makes_us_unique' },
      { id: 'بحرين', page: '/#what_makes_us_unique' },
      { id: 'محلي', page: '/#what_makes_us_unique' },
      { id: 'اقتصاد', page: '/#what_makes_us_unique' },
      { id: 'دعم', page: '/#what_makes_us_unique' }
*/  
    ];
  
    //Search Logic
    const levenshteinDistance = (a, b) => {
      const matrix = Array.from({ length: a.length + 1 }, () => []);
      for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
      for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
  
      for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
          const cost = a[i - 1] === b[j - 1] ? 0 : 1;
          matrix[i][j] = Math.min(
            matrix[i - 1][j] + 1, 
            matrix[i][j - 1] + 1, 
            matrix[i - 1][j - 1] + cost
          );
        }
      }
      return matrix[a.length][b.length];
    };
  

    //Scroll Code
    const elementOnCurrentPage = document.getElementById(query);
    
    if (elementOnCurrentPage) {
      // Scroll to the element on the current page
      elementOnCurrentPage.scrollIntoView({ behavior: 'smooth' });
    } else {
      const match = elements.reduce((bestMatch, element) => {
        const distance = levenshteinDistance(query.toLowerCase(), element.id.toLowerCase());
        if (distance <= 2 && (!bestMatch || distance < bestMatch.distance)) {
          return { ...element, distance };
        }
        return bestMatch;
      }, null);
  
      if (match) {
        // Navigate to the page
        navigate(match.page);
        setTimeout(() => {
          const matchedElement = document.getElementById(match.id);
          if (matchedElement) {
            matchedElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); // Small delay to ensure the page is fully rendered before scrolling
      } else {
        alert('Item not found!');
      }
    }
  };
  
  
  

  return (
    <div
      id="navbr"
      className={`navbar navbar-expand-md navbar-dark text-white p-3 fixed-top ${isScrolled ? 'shadow' : ''}`}
      style={navbarStyle}
    >
      <div className="container">
        <div className="px-lg-4 d-flex justify-content-center align-items-center">
          <a href={props.logoLink} className="navbar-brand">
            <span id="brand">{props.title}</span>
          </a>
        </div>

        <div style={{ display: isScrolled ? 'block' : 'none' }}>
          <svg
            className={`ham ham3 d-md-none d-lg-none ${isActive ? 'active' : ''}`}
            viewBox="0 0 100 100"
            width="55"
            onClick={toggleMenu}
          >
            <path className="line top" d="m 70,33 h -40 c -11.092231,0 11.883874,13.496726 -3.420361,12.956839 -0.962502,-2.089471 -2.222071,-3.282996 -4.545687,-3.282996 -2.323616,0 -5.113897,2.622752 -5.113897,7.071068 0,4.448316 2.080609,7.007933 5.555839,7.007933 2.401943,0 2.96769,-1.283974 4.166879,-3.282995 2.209342,0.273823 4.031294,1.642466 5.857227,-0.252538 v -13.005715 16.288404 h 7.653568" />
            <path className="line middle" d="m 70,50 h -40 c -5.6862,0 -8.534259,5.373483 -8.534259,11.551069 0,7.187738 3.499166,10.922274 13.131984,10.922274 11.021777,0 7.022787,-15.773343 15.531095,-15.773343 3.268142,0 5.177031,-2.159429 5.177031,-6.7 0,-4.540571 -1.766442,-7.33533 -5.087851,-7.326157 -3.321409,0.0092 -5.771288,2.789632 -5.771288,7.326157 0,4.536525 2.478983,6.805271 5.771288,6.7" />
            <path className="line bottom" d="m 70,67 h -40 c 0,0 -3.680675,0.737051 -3.660714,-3.517857 0.02541,-5.415597 3.391687,-10.357143 10.982142,-10.357143 4.048418,0 17.88928,0.178572 23.482143,0.178572 0,2.563604 2.451177,3.403635 4.642857,3.392857 2.19168,-0.01078 4.373905,-1.369814 4.375,-3.392857 0.0011,-2.023043 -1.924401,-2.589191 -4.553571,-4.107143 -2.62917,-1.517952 -4.196429,-1.799562 -4.196429,-3.660714 0,-1.861153 2.442181,-3.118811 4.196429,-3.035715 1.754248,0.0831 4.375,0.890841 4.375,3.125 2.628634,0 6.160714,0.267857 6.160714,0.267857 l -0.178571,-2.946428 10.178571,0 -10.178571,0 v 6.696428 l 8.928571,0 -8.928571,0 v 7.142858 l 10.178571,0 -10.178571,0" />
          </svg>
        </div>

        <div className={`collapse navbar-collapse ${isActive ? 'show' : ''}`} id="mainmenu">
          <ul id="uli" className="navbar-nav text-center ms-auto d-flex align-items-center">
            <li style={liStyle} className="nav-item px-4 pb-4 py-3 py-sm-4 py-md-2">
              <form onSubmit={handleSearchChange}>
                <input type="text" placeholder="!ابحث عن أي شي" value={searchQuery} onChange={handleSearchChange} onKeyDown={handleSearch} className="searchBar mx-lg-5 mb-lg-1 " />
              </form>
            </li>
            <li style={liStyle} className="nav-item px-4 pt-4 py-3 py-sm-4 py-md-2">
              <Link to="/Offers" style={linkStyle}>العروض</Link>
            </li>
            <li style={liStyle} className="nav-item px-4 pt-4 py-3 py-sm-4 py-md-2">
              <Link to="/ShoppingCart" style={linkStyle}>عربة التسوق</Link>
            </li>
            <li style={liStyle} className="nav-item px-4 pb-4 py-3 py-sm-4 py-md-2">
              <Link to="/LogIn" style={linkStyle}>تسجيل الدخول</Link>
            </li>
            <li style={liStyle} className="nav-item px-4 pb-4 py-3 py-sm-4 py-md-2">
              <Link to="/Settings" style={linkStyle}>إعدادات</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
