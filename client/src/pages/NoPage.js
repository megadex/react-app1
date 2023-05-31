import Breadcrumb from "../components/Breadcrumb";

const titlePage = "No page";

const NoPage = () => {

  return (
    <>
      <Breadcrumb breadcrumbItem={titlePage} />

      <div>404</div>
    </>
  );
};

export default NoPage;
