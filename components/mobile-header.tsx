import MobileSidebar from "@/components/mobile-sidebar";

const MobileHeader = () => {
  return (
    <nav className="fixed top-0 z-50 flex h-[50px] w-full items-center border-b bg-green-500 ps-6 lg:hidden">
      <MobileSidebar />
    </nav>
  );
};

export default MobileHeader;
