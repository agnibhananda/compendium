import { MenuIcon } from "lucide-react"
import NewDocumentButton from "./NewDocumentButton"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"



const Sidebar = () => {

  const menuOptions = (
    <>
      <NewDocumentButton>
        <div className="flex flex-col gap-2">
          <div>New Document</div>
          <div>Settings</div>
          <div>Help</div>
        </div>
      </NewDocumentButton>
    </>

  )
  return (
    <div className="p-2 md:p-5 bg-gray-200 relative">
      <Sheet>
        <SheetTrigger>
          <MenuIcon className="p-2 hover:opacity-30 rounded-lg" />
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <div>
              <div>{menuOptions}</div>
            </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <div className="hidden md:inline">
        
        </div>
    </div>
  )
}

export default Sidebar
