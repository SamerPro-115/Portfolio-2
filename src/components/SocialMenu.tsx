import { useState } from 'react';
import { Menu, X, Github,  } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { DiscordIcon, TikTokIcon, XIcon, YouTubeIcon } from './ui/SocialIcons';



export default function SocialMenu() {
  const [isOpen, setIsOpen] = useState(false);

  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/SamerPro-115', label: 'GitHub' },
    { icon: XIcon, href: 'https://x.com/sam__935', label: 'X (Twitter)' },
    { icon: YouTubeIcon, href: 'https://www.youtube.com/@SamerPro_', label: 'YouTube' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@samerpro_', label: 'TikTok' },
    { icon: DiscordIcon, href: 'https://discord.gg/GxfAgbqMaZ', label: 'Discord' },
  ];

return (
  <DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={false}>
    <DropdownMenuTrigger asChild>
      <Button
        variant="ghost"
        size="icon"
        className="relative  h-10 w-10 rounded-full border border-white/20 bg-black/50 transition-all hover:bg-black/70 hover:border-white/40"
      >
        {isOpen ? (
          <X className="h-5 w-5 text-white" />
        ) : (
          <Menu className="h-5 w-5 text-white" />
        )}
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent
      align="end"
      className="w-[200px] border border-white/20 bg-black/95 p-3 
                 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 
                 duration-200 ease-out z-999"
      sideOffset={8}
    >
      {/* Social Icons Grid - 3 columns with stagger animation */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-full rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-all group
                         animate-in fade-in-0 slide-in-from-top-1"
              style={{
                animationDelay: `${index * 50}ms`,
                animationDuration: '300ms',
                animationFillMode: 'backwards'
              }}
              aria-label={social.label}
            >
              <IconComponent size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          );
        })}
      </div>

      <DropdownMenuSeparator className="bg-white/10 mb-3 animate-in fade-in-0" 
        style={{
          animationDelay: '250ms',
          animationDuration: '200ms',
          animationFillMode: 'backwards'
        }}
      />

    </DropdownMenuContent>
  </DropdownMenu>
);
}