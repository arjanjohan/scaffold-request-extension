export const menuIconImports = `
import { DocumentDuplicateIcon, DocumentPlusIcon } from "@heroicons/react/24/outline";
`;
export const menuObjects = `
  {
    label: "Create Invoice",
    href: "/request-create",
    icon: <DocumentPlusIcon className="h-4 w-4" />,
  },
{
    label: "Invoice Dashboard",
    href: "/request-dashboard",
    icon: <DocumentDuplicateIcon className="h-4 w-4" />,
  },
`;