import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Link } from "lucide-react";

import { MdStorefront } from "react-icons/md";
import { useSession } from "next-auth/react";

export function StoresAccordion() {
  const { data: session } = useSession();
  return (
    <Collapsible>
      <CollapsibleTrigger
        className={`flex items-center w-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-background`}
      >
        <MdStorefront className="mr-2 h-4 w-4" />
        <span>Stores</span>
      </CollapsibleTrigger>
      <CollapsibleContent
        className={`flex items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-background pl-2 pt-2`}
      >
        <MdStorefront className="mr-2 h-4 w-4" />
        <span>Store 1</span>
      </CollapsibleContent>
      <CollapsibleContent
        className={`flex items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-background pl-2 pt-2`}
      >
        <MdStorefront className="mr-2 h-4 w-4" />
        <span>Store 2</span>
      </CollapsibleContent>
      <CollapsibleContent
        className={`flex items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-background pl-2 pt-2`}
      >
      <Link href={`/dashboard/${session?.user?.name}/stores/createStore`}>
        <MdStorefront className="mr-2 h-4 w-4" />
        <span>Create Store</span>
      </Link>
      </CollapsibleContent>

    </Collapsible>
  );
}
