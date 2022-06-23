import {
  FooterTypography,
  H1Typography,
  H2Typography,
  H3Typography,
  H4Typography,
  H5Typography,
  BasicTypography,
} from "./typography.styled";

const Typography = (props: any) => {
  switch (props.type) {
    case "h1":
      return <H1Typography>{props.children}</H1Typography>;
    case "h2":
      return <H2Typography>{props.children}</H2Typography>;

    case "h3":
      return <H3Typography>{props.children}</H3Typography>;
    case "h4":
      return <H4Typography>{props.children}</H4Typography>;
    case "h5":
      return <H5Typography>{props.children}</H5Typography>;
    case "footer":
      return <FooterTypography>{props.children}</FooterTypography>;
    default:
      return <BasicTypography>{props.children}</BasicTypography>;
  }
};

export default Typography;
