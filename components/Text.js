import styled from '@emotion/styled';

import Link from './Link';

export const PostBody = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
    helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: rgba(0, 0, 20, 1);
`;

export const Heading1 = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
    helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  font-size: 40px;
  line-height: 1.2;
  font-weight: 700;
`;

export const Heading2 = styled.h1`
  font-weight: 600;
  line-height: 1.2;
  font-size: 40px;
`;

export const Heading3 = styled.h1`
  font-weight: 500;
  line-height: 1.2;
  font-size: 32px;
`;

export const Heading4 = styled.h1`
  font-weight: 400;
  line-height: 1.2;
  font-size: 24px;
`;

export const Paragraph = styled.p`
  font-weight: 400;
  line-height: 1.8;
  font-size: 16px;
`;

export const PageTitle = styled.h1`
  font-weight: 600;
  line-height: 1.2;
  font-size: 24px;
  margin-bottom: 24px;
`;

const BasicLink = styled(Link)`
  font-weight: 400;
`;

export const Anchor = props => {
  return <BasicLink {...props} />;
};
