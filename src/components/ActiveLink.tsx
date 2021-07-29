import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExactHref?: boolean;
}

export function ActiveLink({
    children,
    shouldMatchExactHref = false,
    ...rest
}: ActiveLinkProps) {
    const { asPath } = useRouter();
    let isActive = false;
    const href = String(rest.href);
    const as = String(rest.as);
    if (asPath === href || asPath === as) {
        isActive = true;
    }

    if (!shouldMatchExactHref &&
        (asPath.startsWith(href) || asPath.startsWith(as))
    ) {
        isActive = true
    }
    return (
        <Link
            {...rest}>
            {cloneElement(children,
                { color: isActive ? 'pink.400' : 'gray.50' })
            }
        </Link>
    )
}