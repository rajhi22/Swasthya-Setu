import type { LucideIcon } from 'lucide-react';
export function Icon({ icon: Glyph, size = 20, className = '' }: { icon: LucideIcon; size?: number; className?: string }) { return <Glyph size={size} strokeWidth={1.9} className={className} aria-hidden="true" />; }
