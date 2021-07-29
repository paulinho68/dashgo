import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                <NavLink icon={RiDashboardLine} text={'Dashboard'} href="/dashboard" />
                <NavLink icon={RiContactsLine} text={'Users'} href="/users" />
            </NavSection>
            <NavSection title="AUTOMATION">
                <NavLink icon={RiInputMethodLine} text={'Forms'} href="/forms" />
                <NavLink icon={RiGitMergeLine} text={'Automation'} href="/automation" />
            </NavSection>
        </Stack>
    )
}