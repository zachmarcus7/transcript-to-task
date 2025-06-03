import { UserIcon } from '@heroicons/react/24/outline';

export default function NavbarUserIcon() {
  return (
    <div className="p-2 bg-purpleish-500 rounded-full cursor-pointer transition ease hover:bg-purpleish-600">
      <UserIcon
        height={20}
        width={20}
        className="text-white"
      />
    </div>
  );
}
