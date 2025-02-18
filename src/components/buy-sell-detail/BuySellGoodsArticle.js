import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import GoodsArticleLayout from '../common/market/GoodsArticleLayout';
import BtnDownloadAppWrapper from '../common/market/BtnDownloadAppWrapper';
import { GoodsSwiper } from '../common/swipers/Swiper.style';
import BuySellGoodsDesc from './BuySellGoodsDesc';
import { UserInfoForGoodsArticle } from '../common/UserInfo';
import { BreadcrumbForGoodsDetail } from '../common/Breadcrumb';

const BuySellGoodsArticle = () => {
  return (
    <>
      <BreadcrumbForGoodsDetail
        navList={[
          { name: '홈', path: '/' },
          { name: '중고거래', path: '/buy-sell' },
          { name: '타원형 좌식 테이블' },
        ]}
      />
      <GoodsArticleLayout>
        <div>
          <GoodsSwiper
            modules={[Pagination, Navigation]}
            pagination={true}
            navigation={true}
            lazyPreloadPrevNext={true}
          >
            {[...new Array(5)].map((_, i) => (
              <SwiperSlide key={i}>
                <img
                  loading="lazy"
                  src={`/images/buy_sell_detail_${i + 1}.jpg`}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </GoodsSwiper>
          <UserInfoForGoodsArticle />
        </div>
        <div>
          <BuySellGoodsDesc />
          <BtnDownloadAppWrapper />
        </div>
      </GoodsArticleLayout>
    </>
  );
};

export default BuySellGoodsArticle;
