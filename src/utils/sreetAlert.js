import swal from 'sweetalert';

export const basicSweetalert = (msg) => {
  swal("Hello world!");
}

export const standardSweetalert = (msg, type = success) => {
  swal(msg.title, msg.msg, type);
}

export const confirmSweetalert = (msg, type = success) => {
 swal({
  title: msg.title,
  text: msg.msg,
  icon: type,
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Poof! Your imaginary file has been deleted!", {
      icon: type,
    });
  } else {
    swal("Your imaginary file is safe!");
  }
});
}
