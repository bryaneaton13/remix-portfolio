export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow flex items-center justify-center p-6">
      <span className="text-sm text-gray-500 text-center">
        © {new Date().getFullYear()}{' '}
        <a href="https://www.bryaneaton.com" className="hover:underline">
          Bryan Eaton
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
