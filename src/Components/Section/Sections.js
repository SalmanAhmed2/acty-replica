import React from "react";
import "./Section.css";
import girl from "./Pictures/girlimage.png";
import icon3 from "./Pictures/user-icon-3.png";
function Section() {
  return (
    <div className="feedback">
      <div className="feed-head">
        <h1 className="headings">
          Get feedback
          <span className="hands-up">&#128588;</span>
        </h1>
        <p className="italic">Create an activity & allow others to be dazzled</p>
      </div>
      <div className="feed-tasks">
        <div className="task1">
          <img src={girl} height="43" />
          <div>
            <p className="bold">Your activity is now live!</p>
            <p className="grey">Call Mom</p>
          </div>
          <img
            className="star-icon"
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAYAAAD8BaggAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBJREFUeNrEmFtIVEEYx791j+td0hJNSpCEMsKHioxqiaygB3uqCMpu0EvR5THSeumhoIcgAiGjiNIsRCiIgjQzCF+6Ua7lJbMk3IrWlNVwdd3t/x1ml9OWuzOn4+4ffuzs2W+G/86ZyzdjszV9JUUtBFvAKlAK5oM5wAdGwUfwBrSDp+K5tGyShmxgKzgKKkCSZPvD4Ba4AAZkKsg0XA6eg3tgk4IZVi44AnrBRdGTpg3ZwRnQAVbQ/0kDx0AncJoxlA7ugtOKPRJLC0Ar2BXNeaRSwX2wgWZHDlAvxmWDTA9dnkUzxklyDayPZegg2EvxEfdUI8ibyVCBmJ7xFK9h52cyxAM4i+KvfaAs0lA+OECJEY+nE5GGeBqmmWktiQLUtdipw2WT2gZyjIZ2mm1pf+4dKk3t0+GySaWAytBelonPEbEyKynZNkVDS8torvZT/+7x51Dhu7c0FUw2Y+o6DxvuoWVmzBQ7Bql10fawGRaX+Rn/ZkLLQz1Uhc+bMjXqiw5TRdYzmmcfJs3mjxrrD2r0YzqX2rzrqGqwVqb5XyBDCw0mGVVmt1C23Su3m8JwgfZdryMp3j8dSSqza3XfQxoPpEu/A47lOgpKY0Ne2ehuXwmV9bTTWCAjZqw3kKnHch0FjbKhIZUaA5NFdNJ9KmZctbtGj1XQt9A61Ks6HbonSiyJiVCP0dCISs3y9FeWxESoI2RoGjxSMpTxMlzmRfDJ2Fp6POb8Y0E0xkiqxbh1NCi9bH8e+YIOqvPsofwuF23sb6bN/U16mZ9NwhjHKOiLODaFj0GaeHXFCdrxa8BZYw/xsnsuQWY8oPZfCdpV8CIBhqqNk8poKCDy6fE4mnkArkRL8t+LRD8QBzMfRAcEYx2DboNDkYEW65M4lntkT651YLdICazWa7AGfFY92zeKi4ZOi4zwMLgkzLjN3n64RCZ3PFojEmrj7EVcOExYcT8UOvPvAFXiCJwSI57/QDO4Ia5zLL2w+iuRAivBElBoSPI8YsC6xIxV1m8BBgDdh8spe7HPSgAAAABJRU5ErkJggg=="
            }
            height="40"
          />
        </div>
        <div className="task2">
          <img src={icon3} height="43" />
          <div className="task2-text">
            <p className="bold">Activity liked!</p>
            <p className="grey">Call Mom</p>
          </div>
          <p className="grey">3h ago</p>
        </div>
        <div className="task3">
          <img
            height="43"
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA9CAYAAAD4S6qtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAELhJREFUeNrUWwmYFNW1/qvXme6efV8ZlhkWZWfYke09HyouyKK4gJgYgygJLqB5CZ9GEHmA5uWJ+T5fcAsxRCPPKIgLEMwgDKDAALI5DLPC7NMz3T29VVe9c6tqmt6nG8j36eU7013VVbfuf8+55/zn3IITRRE/hsbtfICjj6Ek/Un0JM0kleJtW2sj3vdDB0jAMujjWZJ7SPJCXFJB8g7JZgLr+lEBJHDL6ONlElMUl1eTLCKQZT8KgARuE308GeNtTIMPEsj3f9AACdxy+vjvq7ydgZxMII/8IAESOOZETpHEXUM3Z0iGE0i3ZnlN13Ub3ArHUvQRTl9jLzf859WAS9IYsKP0KbxU+TF2tVQMplP3MeejuW4zDwE5QlXPIXPjw0hKFMlUHAU7byexkTSSnFfkBAmvrrrBQJ8LYn22Qa3DrrHPYEJKMZ4vuZsBZKcfuq4AM4T6Qh0czJXfTDKJJD6G260kZRvTGquebss2xgpuR+nTErhTlnrMPrKp56dJZO5xmmtWHHA7yfI8sXI6faqush+m3VuMnBDTTXqVVgI3PW0ILnQ3Ydbh9WhxeZeclqRIdQ3gbiM5RvJ3kpl5QqXqWq2gS1D7zByHfobMsNfqVBp8MOoJL7hpB9eiwdEReJnxagZVqIDawTxVz8l84ftrNvMsNe/9vm7QAhybshZjkvqGBPe3Uctxe9YoCdTM8nWod7SH6rIlVoBzFGp0R+APBcLZoIs9vAC71SWJ4Ok9HPXRuvy8YqImnpzHSgxNKPCeV3MqvD38US+4aeVrUGNvDRcPGzUxrLUNJE+F+jFNvASj2AWXg0dTbRdaLltgbrHDaXdf6YDjkJ5rwvDJBdDq1CEfUqp3wKQSYBVUeOzU2+RA9FiUPxl7x/8KM8pfwmlrA94d8XMszJ0grTUGrtLWFG7M+xk3jQagjuQtJa6EbH0tB3DySD0aqswQhdCaYoSirdGKbosLSWmhHWw8OZl7jJ3YYkmBSP8ePvEGNCoV7sudiM/HrUJZ+zksyBmHVpdFMssI4Fh7U5rYJ6o7I13EpvpDkjvDBtjmo5iw83aILnuwl4vXSmASUuKQmBqHtCwTtHp1ZMbMa3Fj3QDYRZXXJLeNfBzzcsZKx+1uq+RQTlrqInXDmNBI0iDfmwb/JxI41gYe/LUXXJxRi/QckySp2SboryIKFWnc2JDWhMdbc+R1LAq4//jrEtCpaYNw6+ENvYHrJllsSzjK96bBxxWAEVtq0yEsaX0MqalaGJP01432re7IxNqOjFhvc5LM9fT7bqe9yQHjtDMIN8WjSDZFFaEzElGQEJCuqQzg4in51qTT4nNBdFKq5owtjPw2pRn9NS78si2H4mNUzr6SpUoErlxa84ovCAWQqWGr4lx6Nylfcq3NAZexDFwisTVO6+eC4W6E2LYFYsd2OoiOsSzOyMWs4p/i1cZGbG34Gped5qBrhuocmGvsqtpuSxxxLP+CTfZoioQx0V+TvBjtTC9y/hajPHvAGSeCy19P2oucfIu2coj1zxBGa+S4lLoQXNbTXvbHvOr35DXPWS/BLXqQpU9Cf0MWsrp3QWxkEUx4hP78UbqWYi4zUdPMs0HckWwKK2MxJSk9ir8BXMGrEji3y42/bd2GRxYswn+UTsXmDb/zH7hxPE3Exoi0lUu6g8CtlK7p6uzEG69uxoOz52PZlHmI/6YFd2eXYlJKCbIJJJdyL7hMlh/jhR6C7xuqAk30FyQJ0YJLEDuQhmaocl6jUelgs1qxaukKnDn5nfea4aNHBgMwjgNS5pO5/jW4U00auOxnpa+1F6uxkvprabwS74aPCdFf2mKIlj25sJ9cQoev+wL0nUaj4jmjd+nCKXCmabRq+0nHm1542Q+cFJCOn/A7PrhvvzKoJT2rM8A0iU+o4sG73Vi94lk/cFJ/x670xya08pzsvLj0n0CxPpXoCa3Bu0mSYwNIYBKmyQH6wkV89eXeoGs+3PpX4qQ8+pUUE7gynD97HuOnTiIflEWBkxJvh38FQJowav/4fA/qqoNLnq+u+S/U19YhKTkJn320AxnZWXjhlXVkFRMgcro+5LVniLy4OxTAB2INOgM8FWSZt0jfjx76BiYKFxOnTcGxI0e9My8IAra/94HffQ00wPw+hXRvIUQ/gKRRGiNr35YfRlZONoaNHoH9e7+Cvdvu1drbr/+v947a6hrlVnL62lyi2NWLiNgHAUwkmRELuDjRhkKWQajkBNzS1YWnVj+Hm/59OqrOV0pOJmze16kkpeoAj8sGyamV/ix45Y+vITsvF7tIUxuffylkXww4Txai0Wgk02aZDpkoi1Fu3zU4JUxMDNv6CxVSHUbk5VQlIzMDdnu39N3hcEQub2QqDIVvCYghTm/4SKdrHA6nTE8i9JeckiyDu9JfEploaaAGp8ZsnsJxZQopqTeOxdjJE7DkroXS2jlz4lTY+4oHD5TWDQv2YndFcJzsPkrr8CZMnn4TnvzJMpQMGYhjh78N298kuk5q7gYC2CoFePKiE+jMAV8NDo4VYIlHfqjYuVMaLJvxuxbOw5Gvy2G1hA7iHKU+j66QHbVoKSMmHcxM0PmJnBtOGo8Bg0pw5MAhyQRDhqnEBDzwsyVyf2b5PoGXWNLwwDAxKBZw812nkC22KXlzHcR2OZ4tWfYzzJ4bOvnQ6rR49sXfYOTY0TI/bQnN48WuPWQVsmZXb1hDcW9UyOtS0lKxbvMryGTW4G6iMfxJvp+XQkSxd1IVquZQOGjvmtMKmNX6Bfpp1/moRgtV4R8Aw2hv7Pvi409RU1UNnV6HQTcOwe3z58iDYaZ56Tek+U/DP4RIuqroXYnbskS5bPc+lO3dh6ZLjZKnHlE6GrfNvQNGEzkpwQahhlia44xsqV1uuK08c61FjKoxgDolzYiq/TLbiJaGzSh1vhXkAbnsleCS7w4ZwGUn0Abx8mqI1gO9P4gxmtw1ErULnxx9D6FhFX1evHKq3QWPQ7L9FAZQEws1y9OpYSYbL3Tvkdw5p+8raU8kEwHfToNfI5krl0xc0jCGBkneUrDT75SgWvaR1j6mY0d0D2OTUbuUHBjRusRbKP26kfpLpXXbSbGTMiPLl2TOu4MyE8Et9NRZvV6Uj3rXIF6DSlsrRgi1RHAfpoeWeNMh0X6G1tV70qyKTZtwvbZ0RNshiu6HoutPlDMJ35DHvliiLoiSBms69ytEkMJEXJEcnBnI+MEQGf1y1f9rt5+IHHCpd8mTy9HwXeRgOnZKWlU8KGtmX4CCArJXUzWpOfR1/kOZ2aOkte/ITAulDF50XYarqxm2Lg5aclem5GvXYV21iG6LiIK+HAwmeV1z+j5k/jf61Pxy6GFjyckQQJcXYFtgoL+o7AZFnjyai2KPT9AVnARSZvM7t2hQ9vc4CB7lucSaMnIFZBeJyCoUkZ4nSsemFFK8QYSanuyhaxtqRNSTXDgvoPK8B3X1PJpaPbA6eQjK3qWK4zBrqgnPrdURESCC30RcNK5Y1iCrFNgqfNefNDeBAM9EA1BLNEoLV/BMn9fiq+3+5UBWaGu4oCIJ3Zfdw+M0rWdXz4xEaAzop/ssuLe6BH2LyPk4qFNHcMc+GjwTGOhPRGMyxjDLtau7f0ym56EBn7W1RQXOt9Vfyg7vXyjJFXjvsjgaCHBfVHtxojm0Zg2pMQ201tEJh8DHvCa18eHTVR/zRA8P9QV4mCkiUueZFBq0YSJKQnr0e5ZMa03O7qtyOmnZ4f2gj3myLPl0IEA28o8idT7MU0a0yekNC34pS6YJKlV0G1WtbrtUIYu1JSYbkZOvjwDQ2+eHfiVan+/vRnrACA9ZsavGm3H7bZoY2jH85qKoBmrhnZJXjLXdelcpEuIbwq9rl3c9v+PH+Hy+swDHXggoCWLuYhPyBfrJeQEcuWcxsEpN8fCWJ+7Esc+q/Mv6BhNuyMpH39RMZCck07ERGpXsbR28G83dFlw0t+J4cx0Okruts3SEHLxKxeG+pdMoJL0Z3jxlBTIWUhEOIDPil3u2nfy0x8s+SLSfJJ45h3K2gEzA3YrkdDcmLhiIA++fw8ScvhidnI3cggJo++VRdpxLwTieFWgoplDWffIi4jRaFCamSjK1sAS/GDMTxxtrcfDiOWy9cNSv+4eW3oyURNJeuy209pze9RdU1whcOCypqgpef/+Uvzi+JyZRHNpGzDtx56pbsXzGTJQaMqAik3GxQpGO5pAn8+mkwTWTF77cFr5Kx8VjdnIfvDtuLkqS0uVNkrHFWLziZrr/i/Dm6fT0OMpdQUlJIIeHvIv7fz0nksRWuTyoKFmqwWjlJDOQ/assO5G39k60Pl8BV6UZHY3NEL8RYUxOlLL5kOblEeByOGAzd6K7S46zOuKULw6cii/T2vHg5jlQm7cRibaGJdgUIpiBhnyvLVSh6SMF4Jwe7XG+Xs+yF1zCdEqLtoVg/idovRiQuX42zFvOw7qrBh1NzTA3txA/1UOt1ShBWZCAsXqpJ1Q5gtacaV5/PHTPvwEd22lpnIvsXES8QV+/DkhQwwJkjW1kUEKHAhYe/EBYy8Dlv0LrYVvoCbWUg+O7kPLT+TDMyob1LzXoLm+UtIReUkGOyLxhSh4M9xZBzwpvrW/JtCwSjXMy74eng4sCUyMCZAvlvkSxbc8Az3H/wCdQkPaQt9MVSPWYkCDtpyn53Qhd6gykrSxFsnUg7N+2wX3CDFd1JzxtDql2wunVUKfooe2fBNWQJJjGZUITx0kFKfHyPyUy30vrpux9HuQ3pfxZT8HiiAAllzua3/0wB+FPQTUI80eSNxWbfx+BcNrIjD+BaN4NlXEYjOOHgJtKEUgVIlizrJ9tknaXQ2g9KRWloqK0vLiQ+OfJYO1NIz1UQZ06IXKxd4zniz8zhkTyO1+Qou0wVBk/h6iK670EwQZvoazcomTlGuKT6gRwrNQh0vrjybN6LFd2LKPk62xrknd4Pg5h59AWLYXjxFJo8+8Pv0nH3hzME9iuMJiaHvYvbRDZMu+Q9vGibdZOJy5dNMNpIS/srKO1VUVSQ6GkPVZwdmWj6D0yz6AfdX0eAd/8GRlBe2QTHcf7hZS3Ib/+uFXRKMTOT6Dqs4WAksMV3b1nArTeLtP6q9hfJ70IpNGqwFMGMHBkNgpKos5GGFdjr1sekNIjl3/BSWUqhjptEuxHH4oYJuikG6WezwJPsxOsCvsXkolS8bZrF63FuRA7tvU6MvZKyejpfeC087B1OaU3n9j7MwxolI3RJzZyaQPC4xACLDMe+kFr4DzzHKs8hWUyUhtKoYG9mhUqlVM2atjb8Gax4wMy01u9O0zRNH28BqlZRqRkGqIFxyznQZLZPeBkgB6/mKcfvBbu2jch2KpCUzVXWwva9+9B3Tt/QFH1+xHdBsnrEikX3RvF9j9buYxH/xX1M7aInlf2Tbb6LlRmngo9k9fdgCfJl9XR2vs82OcMG9CPWIUHPe+mq9QqfP1+EozRv6+byhVsfkRs+f39cJwbeh2AfaOkPO+EK2ny3TxcZnnd6/oupXiaBefZF4KclfSWhYe/Ao61foOzYgEnzbTYtH69KvtXw8BpRtDxMwrpbY/yfvZfdNj7p+wFiIFsY4nktUj1Wr7bI4UDffEqyr8zQ4IL62SeWhx7MgpXrexwMh6roODP8rGNyi/pSn6ZoZTTjcrArQowRrM6Yqp0eyhECQbEDX0ZQtcJYkZvRLz+/wUYAHl30/hdR2sWAAAAAElFTkSuQmCC"
            }
          />
          <div>
            <p className="bold">Activity completed!</p>
            <p className="grey">Call Mom</p>
          </div>
          <p className="grey">2m ago</p>
        </div>
      </div>
    </div>
  );
}

export default Section;
