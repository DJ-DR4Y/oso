@props(['user'])

<div class="col-lg-4 col-md-6 mb-3 film-container">
    <div class="film" onclick="window.location.href ='/users/{{ $user->id }}'">
        {{-- <img src="../images/tours/angkor_wat.jpg"> --}}
        <!-- <img src="{{ $user->image }}"> -->
        {{-- <img src="{{ $user->image }}" width="80" height="80"> --}}
        {{-- @dd($tour->image); --}}
        <div class="film-body">

            <h6 class="text-center">
                <a href="/name/{{ $user->name }}">{{ $user->name }}</a>
            </h6>
            <p>{{ $user->email }}</p>
        </div>
    </div>
</div>
