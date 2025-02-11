import Spline from '@splinetool/react-spline';

export default function Background() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 opacity-20">
      <Spline scene="https://prod.spline.design/rAlaoOrOe7l-OvSG/scene.splinecode" />
    </div>
  );
}
