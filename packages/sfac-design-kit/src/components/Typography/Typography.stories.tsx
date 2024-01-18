import { HeaderBase, TextBase } from '.';

export default {
  title: 'Typography/Pretendard',
  tags: ['autodocs'],
};

export const Header = () => (
  <>
    <HeaderBase size={48}>Pretendard</HeaderBase>
    <HeaderBase size={40}>Pretendard</HeaderBase>
    <HeaderBase size={32}>Pretendard</HeaderBase>
    <HeaderBase size={28}>Pretendard</HeaderBase>
    <HeaderBase size={24}>Pretendard</HeaderBase>
    <HeaderBase size={20}>Pretendard</HeaderBase>
    <HeaderBase size={16}>Pretendard</HeaderBase>
    <HeaderBase size={14}>Pretendard</HeaderBase>
    <HeaderBase size={12}>Pretendard</HeaderBase>
  </>
);

export const Text = () => (
  <>
    <TextBase size={18}>Text/Large</TextBase>
    <TextBase size={18} weight={600}>
      Text/LargeSemiBold
    </TextBase>
    <TextBase size={18} weight={700}>
      Text/LargeBold
    </TextBase>
    <TextBase size={16}>Text/Regular</TextBase>
    <TextBase size={16} weight={600}>
      Text/RegularSemiBold
    </TextBase>
    <TextBase size={16} weight={700}>
      Text/RegularBold
    </TextBase>
    <TextBase size={14}>Text/Small</TextBase>
    <TextBase size={14} weight={600}>
      Text/SmallSemiBold
    </TextBase>
    <TextBase size={14} weight={700}>
      Text/SmallBold
    </TextBase>
  </>
);
