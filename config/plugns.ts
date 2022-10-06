export default ({ env }) => {
  console.log("[INFO]: Init plugins");
  console.log("[INFO]: Update editor version on fix dark mode");
  console.log(
    "[INFO]: https://github.com/melishev/strapi-plugin-react-editorjs/pull/40"
  );
  console.log("[INFO]: Update CK Editor version on image upload fix");
  console.log(
    "[INFO]: https://github.com/ckeditor/strapi-plugin-ckeditor/issues/13"
  );
  return {
    editorjs: {
      enableds: true,
    },
  };
};
