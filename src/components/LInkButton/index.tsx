import { Link, LinkProps } from "expo-router";

type LinkButtonProps = LinkProps<string> & {
  title: string;
};

export function LinkButton({ title, ...rest }: LinkButtonProps) {
  return (
    <Link className="text-base text-center text-slate-300 font-body" {...rest}>
      {title}
    </Link>
  );
}
