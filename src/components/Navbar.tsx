import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold text-blue-600">SCVault</Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/vault" className="text-gray-700 hover:text-blue-600">Vault</Link>
            <Link to="/costs" className="text-gray-700 hover:text-blue-600">Costs</Link>
            <Link to="/settings" className="text-gray-700 hover:text-blue-600">Settings</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;