import React, { Component } from 'react';
import './App.css';
import Finder from './Tabs/Finder';
import Customizer from './Tabs/Cutomizer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="appchild">
          <div id="appall">
            <div id="logowrapper">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAACFCAMAAACND6jkAAAAyVBMVEX////oTg4OQZTmOQDnQgDoSgAAMY7nRQDmNwDnRwDnPgAAOJC+xdrselnyp5WElL32wrbrbEb0t6kAKIsAPZL++Pf3zML2xrv98O351s4AOpH87OgANI/53NUAL4364tzvknrwmYPvk3wAJIrpWijvjXPsck/xoIzzsaF5i7juhWnqZTvtgGLqYDPpViDxnoroUheYpceqtNAoT5rP1eS4wdhNaKbi5u8ZRpY7W6Bqf7JddazM0uPl6PCOncK7w9lWb6qhrcw2V56QVBzvAAAOwklEQVR4nO1daUPiPBBW2to2CMtVDgG5DwWFdV1dd9e9/v+PeosKmZkcLVCR9u3zkYY2fTqZzJXk5CRFihQpUqRIkSJFihQpUnwUmtVpP3djGY7hw3Fvct18rfPRnUo+vOqkaDBmu5Z1uoZlubbJjNmi6n1095KL5rToMJuTjmHZzJnlU/l/B3ilG0PJO+ffGE7rH93VhKF97ZhBxK/pd+aNj+5uglCdGW4o4t/oZ8PaR3c5IWjcsHAiD9m/TdnfH82xsS3zr+zP2h/d9bij5+zC/Av7zii1OfdAw7J3ZH4F20wVz87oOiqZ9p0pZryCMVNpexrzj36FmKJ5KxV62zSs+aTQ6NRXKsWrdxqF/PzUkDtdtpU6WzugJpljfd9p2avJnCevuriV+V6WUzp4z2OPiahvXLbUxgya06HEDzC6h+pyUnDNBPXhXAdbjZ2uISgqc3yA/iYIY5MybyzCxWm8PKPs2zfv3NtEoUjos5zeFrZ6nmoed/h+XU0aKPVs3Nzq/9418cgSTf7z108/Hp4evn+6e97/ZmNMvbuDi9Q4JfdIrNq5+1JuZS8qlcpFtlX+93vPu11jXc9yO4UGRgbW+cmccL9mzyoZjkr5z163y2MLx5nueB/iH5ijvXp1nPhezhC0fuxxuyqy6y1z92hkc4mmXCN5TtZDi1KfyZTvd75dE6kKd7lXAhDP2U7Sgso/JNRnsp92vt8QKoq9Z8gcmjqsPe92ZLi7lFCfudhZ6fShpLqzze+Pd5//hhlMfrs72G4OyXdzu3brKCHo+v24b0Blz6X+3rejWq1y5jzg72/tvv3kP+XgxzQKO/brGPEpK+U+e7Xj/aDCsZbrX+8Gb3bU4Jf233/f2lVguyKccFmCMllysc+07na73QIKqbmeZu8HfBLX3fictxt85T/fgg/qXu/WsSPEb6m29199t9s1ocbhVsk34D2UNX+/AD245D/XmfSucceVVOVUBjuK/RhIKNu4VD/hB9aMqHPY7gwIPvQYrMTEFijrF2eXl5eDp5/B/5ShAUx7l4cAPkMr9uK78u9o7kEzTg+oMpaU6Zao+7M/v+/vH3e+2wyKPZ8UEaeVB+Xfv0Odgy0toPL5DB5vPGJ1v7N184oGk0vnr6ySUwSkAPH46DiJE/yfmHvdPBgCRSCcRfD71zOo79VW5h3UTa2/6Bpw2azb/bp5JECzm04dhEEHaHsHpUqgZhuoVZo3gO1IGgG4t6y6Vz+PBOdQIvdVOSPuA7k43PuZf+KWeqr1JwbenRbty5STbyUiskC43z2AtgIUexK8/LN+TuuL9habkGrrn3DNUt8+loiS+xIXTLdLL14NspVKJTsIChOt20lGB7i/nd+no0eCKLkHM60jJsaffz18efoUHMh8fGknnROA0kmCmRkh93VuBb6TPp5wU8dIQI1mhNwDlfBOdgj4ugql06wWtlim2ygUwi/rajaqhUKt2t5qpvHqmqjrFtw/B5SO5LjKsbfp3xbg0SJpUKc6dJhpGlaorK43WjVmYVZXNEujW4cxv/lL2XqxF1K0SkPHcE6VU1NY7p+vWuXy4EGX+eBWjt0L17etUeBDS2LpbNa3sBDFJJ112aHN9AOlnh8apouyEjZzcsH1Rt7wdY2ZaQsP+PtvUC6XEfU++eUVBt++k1ja+eDF26+U1WYKiCew94ryelzpiMVWJf7xzcAYv8fX3lm6bEx77kgXBVgs0NS6dTdtsZw8Z1BBDsVFGXm4PPWhrh3J84nQDHrzncFNKXFsbRXjH4G4qN1VtWrmHPXCVJtp2c8DixubHlkd8y8j4Am0zvDWZZXa4epenllq94vD4iJ4Imz3/HY9BXfTDWWCwi+glHo/4CmogshQNJoELNIzl5qpGokCNLmvZGUhGJe8LhAGfSpP4mNeAMReNtetxq5l2U5Xz8nJ6K2dXGu0+Rs55FIXSmhQtK2BCufkOrI5pEXsAixHObOhJ5iwME+RpEVqh3uWKLRLQ1xvqHNtK5u8NlU2TF/XtykIMeVL3BzlU8ZIRlWi/AY0SCRzh49aqJWp5kwxWZTQMAQv/ahI0kJUeODlCSqoS3lKC3xnyXvX+JfRqmKQ9zKk45knZyhhRUQVHRUEJcy9JB8wVa2PJHAtucGfhzUD0Nf8GYL7TGXTHP18Jlf4/G2smXgV2P6uTvDnoJ1U63DNQu2M4jZyH8h9HpdAa2CZ0oUFSu63lHs0Lyu45/6+jFyg/LSqGA1UWQMeSKaPiZT7aWjqV+a+TO0ouT8ZqBjnyHJ9H4b7kVIgfXjwVZiGE1RhImtQ3XxFizhQUXJfDalw3noikyY19z8uVJRvUOZ6PQz3XKtIRjDiXkdLYLsO556sAYqQ+/oWUr+CLbEL1Nw/Bwr+GXCiwnDPJ0FJIC067gEtJGgUIfc3MgvHNRlT7T0gSd6ruT+5v2xpvKtKdgAzdmG4X/KOiIZMdNyDOxGdFB33U2Fd8CqEMJpW251GLV90JNsUiGEJDfcnJ5+fLlXxnNbTL5S7CMM9f5TEvI+OezAjkOuRce8JGscyxsDgrYurfyVGmZb7V/wME8cMwz2IpIk2V6y47wrrqoXQwUj4PA4VuBDch4oh/6+4r1MbR+Zh12gjgd1Dcg+SVvHmfkLEXr64sU0ln2aoD8k9f/P31feG6npU3BPqXUUehroA9gJfPyT3fIEbEwMxMbJzGsTIkXrXK0xMbcNDcl9UBrlO3sm+JxmaiLjv42QJU+cGb7GlT0zrQ3LPo2CS8P17+LWnxJOPiHvEp3adRRWPEBJKOST3fHEC1XwnUXLPVQIqdD6JinsSTpBFlzdA64hpfOmQ3INsnvig6Liv8VA1Mf2i4Z4Is/Y2+CYkRnhI7mugI8LF6LgHMWSSko2G+ykyc+j3xSBjxEBJlENyDxSxIQQ3ouMeqLZ3yZ3gqdbUb4CCZ1ts3x2Se5hJFYzM6LhXh6qj4X6uoVPACH8oZBIdlHseeBWTJ9FxD3gh4dJouMcZd4mLDoH4JcJwUO55JlVM2IblPrAdKEyjmo3UKeirLAlrXGKL29yFfEFkWx+Ue1grSbsclns0e8leHNTn0Hpboi30RVhYW4Bsz1ajp3As3IMdi0SrGAY/NAO5DS08GfegGoK+TlejfAXgzBRQX/HkHqhimsbG9Qea4nz0Moak8AVk5CfkElYj+lJoDwfCwJNiyj1Ydi8UaMP15poC3mu0WYtkfIBoKf2CNezpaBcFFZReUUy5BxFAgV6oX2mBAUBQlSTQa8Ln7WCPVKvwMcMwOhFT7qFioduaIYtAuVYKv4vEuOZeraQmBnOvK3/rYIcUqq+4cg98Qhp6RULpqjz1Jd4NU5wudeX3xNCRLXVcY0yiv+Ajx5V7YKUIegUZIYpy2DzWwqJDX9f5zlSJixP+GjWSHoFBsLhyD+MbdCrsoa5IJ8IOzcJRSwa+j6SwkBgvYOskjDrNTHXBxdhyD7Q61cdYxcqSoHVamiFq7IBi5muyPseRRmM8rNl8guEojC33cLpjJHuFX8ou0r92XEKJqDQKoA5F5iOItQMSB6tOqccRkPhyD+srSJlcAxPjWlgoZUsNqLEENwuUPr5IP5+4JKcmnO2H11jEl3sYt6HWzJgO9eJGdr3SUra0iTi2oDBA4Z61hQ9on6LwRmcslFqS1GN8uUe7Yxp4xDeFUi5mjHvT6bRXVJytil8GEisE695ANf7qJna/+mJteu3pTHLkEynmizH3HpQrsqRXVt5r26YtKPrNVThfw6lY6Td54iNeircd2//Q0pPLTGJMxZh7uLmTEMfPUUsmCMDCb4LDzTU7F223YERSAxJn7pFvSksZhyoJV8FYk4+WnulilD2Z5KvB6FeMNfdoG3Di3gimtRSwjXk7KdRKI4ZfUvf8rQaX6GDHmnu0UwG1sL1hMDNmDr6+ZZumiWdQQ58WoYc76agXna94c09CN8QJygXpBKePtxIXYAftESKcJ6d8lMTvjTn3SOsI5E+1S+Vtc9VcR16IfUnFVSHSG4nb2pxQLyRgdbqOe1RkJV+njVeYZ+Vbtn4JsaYfAFdHOyR52ywqj41fH5GtsVYsM8SeWaUQWyGwotRHwB5CwGY0ZEcMJGWouFDuCz6jXS0U26Oj1bjl4FPfiljt0Hhk9YbJdqWxndxaEpXWihVQMfOG5k2AarNUR25BGzlwyz0cOcWWL7qmqLFC29+X5dvlom2KK9ImGBaSOybkShpzR9gGy+wBWsXjV1/gWmEPRSyZGsVlGTnV6EGrrQL3vIZmAa2LBiNIpSd/AV4r4l6srwCD4+yvog1EkyTlliJlte5ytVecba+OLXduFkQy+jKdzcbbnARqK3Sb7Yw1W5l0QRw88PRKmHKg9iqoNZIHs30AhT9Q7Rz6d0N+5VtQf16A51vFEPfatdI0Py1VZZNeTTzCloalg1AoOsQ8FcaXBLM1+a4dPLXwmUV8w8bbfl+aI7/v1yfwZMqflc+4Kr82alVCnvFJp0s223oz0QXjzFlu8N5wEtQL15bB/MHluu5qgDmzSfCGmD3HtF3bdEKdf1k9Zf7N/SEmSSjUc/7I9p+pGWX3mctspXJxpj2A5/e38tnZ5SD8PuEFQr7l9Lc+HKlw7RqrTQyYc9vfebfTeqOQX/S7/ck07K6lXmHR7ZXCziyNfL+fV3xRr1GrBgye31cPD9+DDpd5PP+91RGHwvLfgH315PA6jUZ7u1OHU8isdJuFPLA8xb7oiCkR34ZPxJENx4+6JHRmMTaqJuhYvOPFXJ5IcmaLGlXincJilE/MkW3HAEVoxfINPmM5Hi3y0+k0vxiNT31zzLfsDHmUJcVOaN6onXvLN7pfwOMLrpuSHyHyoTZY3XyPxJxWeBSo5yS1GUok5NC2o0FjqIzZi4IvlAum2A+129Ds6/YuTbETqkVDvY8/xPudXPA/RqfPQgh/gs7EPi7U5vLSPEC9UK6UIjJUe7eOnP8Xh+s6pf5dUa/m50uHvaYMV1idG+Us55MtzgVLsQ+ajVopP1ksFpN8qdZIY/QpUqRIkSJFihQpUqRIkeID8B+PpRRqpLTUxgAAAABJRU5ErkJggg==" />
            </div>
            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="one-tab" data-toggle="tab" href="#finder" role="tab" aria-controls="home" aria-selected="true">Finder</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="two-tab" data-toggle="tab" href="#customizer" role="tab" aria-controls="profile" aria-selected="false">Customizer</a>
              </li>
            </ul>
            <br />
            <br />
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="finder" role="tabpanel" aria-labelledby="one-tab">
                <Finder />
              </div>
              <div className="tab-pane fade" id="customizer" role="tabpanel" aria-labelledby="two-tab">
                <Customizer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
