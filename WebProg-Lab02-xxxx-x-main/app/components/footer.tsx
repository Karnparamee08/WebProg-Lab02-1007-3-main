export default function PetFooter ({fburl, stdname}) {
  return (
    <div>
      <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href={fburl} className="hover:underline">{stdname}</a>. All Rights Reserved.</span>
    </div>
  );
}