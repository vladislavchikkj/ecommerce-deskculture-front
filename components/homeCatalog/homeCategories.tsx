import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import style from "./homeCategories.module.scss";

const imageURL =
  "https://lh3.googleusercontent.com/fife/AGXqzDngJpxkfX4RxYJbo_YZaG13NehsppUwn9JBDujubI38Cpaq4aIXCpTmCTOtJzhFj69wR6A6F_VS4WhYtFicZ1ecjgiW5Iuw-_VKJyErK-gXk8DflNoNhpsf1d7K_GAGJZvUyF7TI2-eMgDqB1u1OTvOyZSWWG35mVeS_13wExLibbcnEs4P62XZE7QrdZexqgcHR9iCl-FpdSWmQcMrs8qiGHqvclAe-MuqccLc-r1wmnEDX3NiGwnoDzLKmvOwLgmtxD87-xlsFIXfLQLgx9tpD38C3izrY4y10AJb0cUVBGaiMiC0dLo7kxq1vusawI3CV5UFGnnotgcCFW--y7X03NGf1cNyg3WHFEvYY3oRLa99Nm3ghR2Jp1YJwXKohH4hMpiMOmAL0DEzRy6-N9zhZ486eX8MekoO05inqEH7biNTvN1gwI931cU5YHXkCl7gHDpX8m-T5Sw9f97z8a1QCg_7lqfG7UTY7MT20y6QVK6dlRw9BknMx7r5CpFshbYJQYVnwFkGdOe9vhrQ5W_5owXz_PXwC3qvHN-L5RVivxaWCGtWIe71moWANHlJZ_w3Cf4wm8R4OqJMWzLfFlT8MxULdyd9GvuhE_YbPzn60RFs2RwHPRfmiyBpiSE_ig2EX5arjL6sVfrC5JtYcm8cIWeSZL39-KcaPEupDsryFrWNRq5z92ppX3Apxty4BiwVp_jI8k7AVkl0lade5_W2JHOjCZQlWihjO474VuGuXj4EEUFzG-kkXyFGvvtxujspXwe_kdX183Tj5426dXSNqzgvmzTocSV8McZqMdhGRw5uCg6MQcRM9LHctdAAlQ7XpVYJN1kYguvM_zBKS-8NSYT0LQSNxCwud5LqFzTZiwDds83ZmIKgRtuGMzRSbn4jiIOlRXNn6wzJcR6fMCQ1QixP1V1fmQ_zFbb_PYMpl9KZA4Awa4FlMXXtNiZ6I2ZqwRw7JQVGi5WzyKXcCGR9pca8SwyLy6P9x4Ff6mOuIZ-9W0fOY8uk1vJTD-TelHG3iVdbD7K4U9F5cqpMBUV1TiClfK7I3hr2qCyu-wM8x5dP51nDX9UlS9d4HSxbYVC7Z6YYJwrlR3CUhjwIYJrr0wGTs43_K-rPV_6nsY2ataoCUnjRX0c9oLPAPFLKiz8KMSlotE87Z9pNjIX-2unQOZo9zZThTn4vMrs2etkeNyhSGMbxRst9pgezG1mZnorUdNbge_bO9M9V3bIpGQEWDeFNuG13vvBReg0QgYIfXexPI3jMV7WkLHXlHIsjII3cM6EDysDnXAuOGTUn09-MOoRAOQvQ-yVIr4zI7EQ8u_gJ8Kl4ot-w6TZR7HjTWkYDJip9TXEuDncU8WmKryb_r0SvNSM5L1jziulI0vJoSONr3ZkfRbZm_sMET5oS1YZtQxOvDxYtoGh60x74NW1nNS9v1cRgV7C1KaZnm2A1TMfzl1GyJNKunnevOmolGwlJLqoJgpaNN-E8iOMZhwF1d51RC5DkBlt80_6LceifwZX8Wzpw6cO10Opyp3-0HdTX1gKMBPbFfGON5-TkgQ4ahlojqVF-prw8fFGoqOvdSMkhUxTgj9yLhIeUlI4=w1330-h940";
const imageMouseURL =
  "https://lh3.googleusercontent.com/fife/AGXqzDk1gZNWI72XYGsVG8MUq2bkGB0t1wy7z3IavI_bULjI_SCWe0h_0w-g1b0q2U7CwMIEV4C_CEE8zpB-4UVgWTJ1bgq08qA7NbZrOo1-wv37q1hmcipGe33J4O6LjwghOAuDOUkRS5s6xWrDZFVb2ZMhJ-PcHVDRsE-RDt6bM9iGOTqr2kdgv1KMV9hM26TzYt2Qj8MwbmGaW8a-NWoXIvrwi9k2HjaiRILRlzAdu_50l-RJmB3Qn88rm_wtBZyE9PJfHX1QL-pW3KdqQR4bKHjoi7ftEKTbpCMUtG8cFEawjv-kkkuM-ANzyjrMI-5kmmyEZt0WfRih77gz-6Jf6CjT2_0PkbDjBcX1tfZfqYndErWrnY4W35tF1_-Sj5B_yJAiHnedc3CXqZNVR2AiWKxRECNVoB2X1DIX8RKDnHs4QKGKqsQE8SkYYHJhpcYVceJjtO80BPWfETbljxxx27rvw0OQqr042cbp_Tb2EQr2e08j7ZgcQwwv2bJrbbR1BxhQD8-tWblJPZ0i1Z7E3wv866iA-fR0vUP4yIEtPJo-x4fl99mU6sOzT9m-_rfEoJHv1fHwh2HHKwYlXgXTcNDbCdlhOpQOeqYYfRjjQzcqb8epB1sseGozCEMDqQpreItb8dBstPHVg82xiRdhFFQJJ20I8vxOskiX20THsb-HZ3A9hLxxSOqfhy3XvuIm9spg9HZ8uW2QuXF3-hhBXt9EG6ViDiUrOyP1uAu10D4DREHh64Frj2KWmgFND7J4fTO-nU9hufhARpiDjxbMq30Br67QjAkZOJj-Kazm_C7--EhjgZ2HiOa1Z-IcPNJthuNY4JzhusFMbjZ4D8AtczZv7Hc9m0xJ9u2QBZVhTEGKEneE0LUh6h-wPEM1M2Mcpqqjl03XGs-mdHpK_GqIJNDgCK_GQovcKTR87H89FwhnuUPQoxL2-eFnvvOv5BKN4IwK4bKt37zxNTmu2jsYTbCfLxX8guKm6wpN75n3k3KNskPqIhA9y5mv-bcJP0DgJvPp3KzMaR-D0Glm8b9VzZaOvdKxLjk3Q8d_6CdjcJ2vsw-uPQrplfZ7H3szl3rXJzgBfleHXnVZiFvakbhNNlY4kYTc5I0Cw_EyC_0CNKhqan1EwZLMdnn2HWMQOFlSxQ_CdCOmC73NJ-jb4aMjmXAOV0yRyNMOXjL1TkEeHY6xm6q1ZhbNQfDVGYvAJUO1Wrm70tHCxiOZxsTBwpS8oq3P9bSnvxBfWg0wPTQsr-Z0tKaSMq0Bm1sABOPbSINcGJtMJWlL98lnDMXVZFfQOldc1IGHLQKTla-7ppQ6wbHrMtmfPHmpnWCCNEOY77Y_8UQ1loZh1_NUuYFgdgb5buMPMfshVY4bvHrX5AK1kIEAET-LGrzWxWvPZ0NvA7LYSGyfcx-LzX1rezV2s__VKwRZ9d360W7jcRb-ef1R4_YYBAkfeWl4eKE58AQDzPsmwLX2UGvtm99ue45DbxudMce7uDqN1Ubty85eLyq-XFQABGzmzIIgJdH3Z4blQZb2WmSTdlhufm9xTPx3FrKs4W21WGuK3ueUs1lkO2si77JBciUHxeZAfAtFSYik1Y0=w1330-h940";
const imageAccURL =
  "https://lh3.googleusercontent.com/fife/AGXqzDm-JKWY7UclsCna8brw6uMIDb0CFCK4OEFMiP5X-oiBLT2DicUyRqKVdItgsDc3vDyA2R4rewZENJprxR8Cwc37k3jC_lOiY3tQJMeL-3tUysdm3U6ckq73tZRlX0xPh_Bn6fjefl2ufHq7KlQ_k4ta6148MDfjAYDuU4j5M_sFJGNr4H7UxouiUqEtkX3Zevwf9B8ERjwookVk1cWYZSfkeezLE_gxNAIXVu473wFlSVcvyktS1atuATzukSCUT8gribN_O3vfuK6tDWSiaG1J462v6ATg66Y_ozQ_LaUF-yVH4KRdHaO-jc3FaA6_P2NsPwK-_9HjsHeT43BNDSz5Y33lI2KFsayfJiEj0LqBdaIQzCtsmPInuoByKl1l2Nt3FXozgNOpGy-le2M4ntxpyH1KrJzt2sshc3saVi0DncqnY6eWEP2-PSme4lsZ4bpze15Yhs9RWbl6k31NKN4uZwcNkJSlBVqPJJcWeF_KySS-iy9INAdOucQnxiZoOLvf_loxYazOB47iQhISx3vWGcfnB7t-1nCUQiGsohi0X-zNKk3q-NWgQl4od8eOE-Z8weT-hhj_KVqyr1iDQxNfZMi0gyEap4pOIMReuEo8UPgtwu9iOvUQtH6CgxpwEeK7TRlUC-0GM4c-LDwV1jzj27TyUkzfxIelRHT8U5ztZ0XyER2bHU4j6vFkcGyC7LxNjX3pf3DeEpe40f7j90cRiUGnRO_NISLXlBJCYwgVT_tFfpDvO_naTTGR5mcw_ndarWf5-_au1ESh-_F2pLEEWhdgM4u5xWhSsEO3-mYwbyoDTvqgGDLM11VTwtc-IOvA25sn4FShB8vBDLnySc27aOZkf53QdB-W_bKt40SUNcZ6RMcW7PTOR07RsxedyWkr8r-OhNEGzersKfhx_MQUW_urs-TDgJjIOBMZ5ldiVmrE-swpWQHj3yB9EC4rCsXoKLE56wvjD0DZwRDFv59xlKfe-0bmI7jazFmDMbM5Ltqog8S5ObfRleyOPBRgI8F8YUanD8DD9Hip3H95MBYE66SCyhvi9QNJM2wNYKVdBYA4Kn9Z_HP3mbBBmVn3krwpBsD3DtcKVPuXUIm4FONawrLy4BPw5vifz2tHMyl0Trjag5Pshkk5zHIKifpmfsX22WiRcZ8retaMLpxCmekHZIjdc_UIJ3-dLiYNgDsjQ3bynBfOb7FnKarrMyg9gpr_-Dm4RdmvNrWaHZ-mXQ30OaD5sS5mHdIZxSotdd6f5Jm4tOSQ84SofBiJaUP2FEFwGSeqaWA9Hls_LzbnwpMSGOq_n1uxHn-zvfNCUW-JjieeVYPGN97v_pvP3XzgmKnCZ0Ui81V603yEaoZSdYZ-RwPmOZKmEnjf9WnSgw-oZ7CJfZ0jG0TTVGWEjDTOoyfn0ityi8I5BLNPgX_vlRaSM5AUVM6CDsio1y3MgyAwQ9W25OZkHL2WRiirbgJcBOIETe8sRLr92yBhyqyYy4fTC5ib0Fq7BIj6jTZMh-bLpNw0ynn-VeHGkYher058n1z_Upw0JVkzOOvlWWqZxKJO1iB0aCRz7BkhcZtejeH9VYGs5sWmblautDpqMFA=w1330-h940";
const imageSaleURL =
  "https://lh3.googleusercontent.com/fife/AGXqzDnEOBgPp0rtB9M0DPt5EFohFfxNJaGM11-HXDouz8GghxhaKFrWTlsCLLF5nTtGCMV_VoooRjTpkM6W08de6JKWshz0FNsfPNSTKTpvlqLSSpY0Pdbp0SjvoGEGNtVGseOYxVKq6QyuXiNcI8jXso5df_MWbTAt8eCIRySmoOgkCCp86IF6LRg0yyBJBq_gw_5PfQkPIl6ubN4K8PRnM_TNKQd2No1nsw4QpXNOXu2qXFRnCtUso-M21kfStkJFEIaP4Ti77HfYx3-4nE-Bwkv0l_16AHQpVlhsrUNvoOURxBAKb06zdXPyY_8OJrgfMSOENak2Ua9E_SAl8CetHzLvmr4IcGcXQ71ZTFglyIFQAJj3MGH95Gu_LXc6nRyViXqE7Kjp74K9GTY24dOoX_v1QbNfj3jEpU2Iej3aE1ZnBxyinl0bLjZcEu50NZitP5WK4_lJ1YFeDsp_H0qI3gbjfORZWsZqfh9H4oKVY4cdtQDQibxmAn0gJmoQrkAuWOQIRqWOFboLj1zBMc4lmpNKHBxES5w8vzyaoUsNd3hVlNsSXRUPlt1_aq0IHZxhULLQdqQp2-epk5zLGg_ikO7s2qG6ujILXa7LvrYF9f4760cSNO7YBmppV_7f9U03hZdpBFNijwDp06uaPiATrMfrlKL2sYoXrf6GYENBhu1_5uY9yUqKZIckLYS5BKY7yC6eKMreiQ80KfYfnqlCX0ZaOoQ0ZTtiQFk5rQGDwgoMPMcjL-q_w2EYd7fIADB3E-m5B3xpvBi4qsRw3ASXwjkLZwtSy0IVN8gLb2IuWo-mv5ApvEHjVzBvBN9lDernstf6a6zL-ghgZGKZfLh-jZjdDcZS_i4R5zjx2jVJC0PBn6osz0a1Z6yuZObxhppLXvVEM4eqEqwbwytgNRM5GFR-IspNeRMDbzQrRkKNuVFsaoZNRvdvklIJUL9bY-LiL9S3AEr5A_apUy_fCLjDEsAa6WNwBaXgoTiAWZviFLKqZRwoPTZhxvtLPy1x5Udj6EDqs2zkvsJx_Ejym0VCSkYLUT6P5gdBnHvATaJmbT6ER_v-eODm1Aaay_bjj-VlXZiWOe1lsfoBobe_ksshlQDu4FT2kolzBUEAa4aiwO1-nig1-YACvb-QQTklF8osLIVZm4hM8Dc_Ux-pXanoX6yQoPpUNKMf8VDxfldXib7gJi8GbBuzFPBvW9p-cdYIzBTeuY-Pa37eRy4vtJHbyvCSRt8_OLPazPqGixrxFuGc7BOzefvNp2Wrnrzcf_B-3XEz_vH9fZPCAkbogxYzHh72NEu1ok8ihK0oCp0JmgmXY_AeSKAOG5bQHJzSe5xZjJpHrPSkaLmtWHWoxB87yOT50koLDb7bIMf_Ly627-G_KNSf-a5Qrg3CJ3_MQYzLB1bsv7JzgKDVECGoN9YyfOxzs2PAYeGEoBSKoudfHfXVdi1y5gyF8DOCrXeZ0wm4qeIuLytqzwDC9HXS4kW_WpXaWZDRyb6sibEivoMdNxJsD7EyvPHV6MjvEMgo05-UkX7u7c7yG0C4Iw0-WuvyJID42qIAOMEZKiaVCKnzIuakUE7TwTEQ1wkf6G58nHZ9LA=w1497-h932";

const HomeCategories = () => {
  return (
    <div className={style.items}>
      <Link
        className={style.keyboards}
        href={"/category/b32d6e0f-6c50-42a7-b445-7118361f6f81"}>
        <Image
          src={imageURL}
          alt={"keyboards"}
          width={500}
          height={900}
          className={style.img}
        />
        <div className={style.info}>
          <div>
            <div className={style.subtitle}>/poducts/keyboards</div>
            <div className={style.title}>KEYBOARDS</div>
          </div>
          <div className={style.icon}>♺</div>
        </div>
        <div className={style.btnArr}>
          <FaLocationArrow />
        </div>
      </Link>
      <Link
        scroll={false}
        className={style.mouse}
        href={"/category/a1e3e2da-3cd6-49b8-8a36-a7622e9bc43e"}>
        <Image
          src={imageMouseURL}
          alt={"mouse"}
          width={1000}
          height={800}
          className={style.img}
        />
        <div className={style.info}>
          <div>
            <div className={style.subtitle}>/poducts/mouse</div>
            <div className={style.title}>MOUSE</div>
          </div>
          <div className={style.icon}>♺</div>
        </div>
        <div className={style.btnArr}>
          <FaLocationArrow />
        </div>
      </Link>
      <Link
        scroll={false}
        href={"/category/fd9ba0a6-7feb-4051-9f8b-1c012e9b0732"}
        className={style.outlet}>
        <Image
          src={imageSaleURL}
          alt={"sale"}
          width={1000}
          height={800}
          className={style.img}
        />
        <div className={style.outletWr}>
          <div className={style.outletTitle}>
            SHOP <br /> ALL #
          </div>
          <div className={style.icon}>♺</div>
        </div>
        <div className="pt-5">All products for 25%.</div>
        <div className={style.btnArr}>
          <FaLocationArrow />
        </div>
      </Link>
      <Link
        scroll={false}
        href={"/category/63f1c7d1-8120-4b89-9bba-ea9da517cde7"}
        className={style.lights}>
        <Image
          src={imageAccURL}
          alt={"CHARGERS"}
          width={1000}
          height={500}
          className={style.img}
        />
        <div className={style.info}>
          <div>
            <div className={style.subtitle}>/poducts/chargers</div>
            <div className={style.title}>CHARGERS</div>
          </div>
          <div className={style.icon}>♺</div>
        </div>
        <div className={style.btnArr}>
          <FaLocationArrow />
        </div>
      </Link>
    </div>
  );
};
export default HomeCategories;
