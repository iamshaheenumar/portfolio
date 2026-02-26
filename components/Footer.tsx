export default function Footer() {
  return (
    <footer className="px-8 md:px-16 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-2 font-mono text-[11px] text-muted">
      <span>© {new Date().getFullYear()} Shaheen Umar</span>
      <span>Senior Frontend Engineer · Dubai, UAE</span>
    </footer>
  );
}
