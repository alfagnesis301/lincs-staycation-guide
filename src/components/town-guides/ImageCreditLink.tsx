import Link from 'next/link';

type ImageCreditLinkProps = {
  imageCreditId?: string;
};

export default function ImageCreditLink({ imageCreditId }: ImageCreditLinkProps) {
  return (
    <Link
      href={imageCreditId ? `/image-credits#${imageCreditId}` : '/image-credits'}
      className="text-xs font-medium text-coast hover:text-coast-dark underline decoration-dotted"
    >
      Photo credits
    </Link>
  );
}
