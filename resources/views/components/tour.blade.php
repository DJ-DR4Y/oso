@props(['tour'])

<div class="col-lg-4 col-md-6 mb-3 film-container">
    <div class="film" onclick="window.location.href ='/tours/{{ $tour->id }}'">
        {{-- <img src="../images/tours/angkor_wat.jpg"> --}}
        <img src="{{ $tour->image }}">
        {{-- <img src="{{ $tour->image }}" width="80" height="80"> --}}
        {{-- @dd($tour->image); --}}
        <div class="film-body">

            <h6 class="text-center">
                <a href="/tours/{{ $tour->id }}">{{ $tour->name }}</a>
            </h6>
            {{-- <p>{{ $tour->text }}</p> --}}
        </div>
    </div>
</div>
