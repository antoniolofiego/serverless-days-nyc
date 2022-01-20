import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import { useMounted } from '../hooks';

export const ThemeSwitcherButton = ({ height }) => {
  const mounted = useMounted();
  const { setTheme, resolvedTheme } = useTheme();

  if (!mounted) return null;

  return (
    <button
      data-testid='themeSwitcher'
      className={`flex items-center text-sm rounded-md group ${height}`}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' && (
        <SunIcon className={'h-full w-full text-gray-50'} />
      )}
      {resolvedTheme === 'light' && (
        <MoonIcon className={'h-full w-full text-gray-900'} />
      )}
    </button>
  );
};
