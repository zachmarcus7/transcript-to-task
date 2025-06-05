import { signOut } from '@/auth';
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';
import { MenuItem } from '@/app/lib/types'; 
import Navbar from './navbar';

export default function NavbarContainer() {
  const menuItems: MenuItem[] = [
    { 
      icon: <ArrowRightEndOnRectangleIcon height={15} width={15} />, 
      label: 'Sign Out', 
      onClick: async () => {
        'use server';
        await signOut();
      }
    }
  ];

  return <Navbar menuItems={menuItems} />
}