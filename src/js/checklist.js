const health = [
    {
        question: '삶의 마지막 순간, 당신은 눈을 뜨기도 말을 하기도 힘든 상황이에요. 누가 당신 대신 중요한 의료결정을 내리면 좋을까요?',
        answer_check: [],
        answer_box: [],
        answer_text: '',
        iscomplete: false,
    },
    {
        question: '의료진이나 가족이 당신을 대신해 결정을 내려야하는 상황이에요. 어떤 정보들을 알고 있어야 할까요?',
        answer_check: [],
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '삶을 마무리하는 방식에 참고할만한 중요한 의료문서가 있다면, 말씀해주세요.',
        answer_check: [],
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '‘아름다운 나눔’ 장기 기증을 하셨나요?',
        answer_check: [],
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
]

const finance = [
    {
        question: '생명 보험에 가입한 적 있으신가요? 있다면 보험 정보와 수혜자를 적어보세요. 마루가 가족에게 알려줄게요.',
        answer_check: [],
        answer_box: [
            {
                box_type: [null],
                box_name: [null],
                box_selection: false,
            }
        ],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '은행 계좌, 주식, 부동산, 귀중품까지, 혹시 모를 부채도 정리해보세요. 가족들이 당황하지 않게 말이에요. 알 수 있게 여기에다 정리해볼까요?',
        answer_check: [],
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '열심히 일해서 쌓아온 당신의 자산, 부동산, 은행 계좌, 주식을 관리하는 사람은 누군가요? 가족들이 누구에게 연락해야 할 지 알려주세요.',
        answer_check: [],
        answer_box: [
            {
                box_type: [null],
                box_name: [null],
                box_number: [null],
                box_selection: false,
            }
        ],
        answer_text: '',
        iscomplete: false
    },
]

const testament = [
    {
        question: '남겨진 사람들에게 하고 싶은 말을 차근차근 정리해보세요. 좋아하는 인용구, 가치관, 삶의 교훈, 마지막 편지, 어떤 이야기든 좋아요.',
        answer_check: [],
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '’마루’는 당신이 더 궁금해요. 사람들에게 어떻게 기억되고 싶으신가요?',
        answer_check: [],
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '당신이 하늘나라로 떠난 날이에요. 남은 사람들이  슬퍼만 하지않도록 기일을 어떻게 기념하면 좋을까요?',
        answer_check: [],
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '남은 가족을 어떻게 돌보면 좋을지 말씀해주세요. ‘마루’가 그들 곁을 지킬게요.',
        answer_check: [],
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
]

const funeral = [
    {
        question: '당신과 마지막 인사를 나누는 자리 장례식. 무엇이 가장 중요할까요?',
        answer_check: [],
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '장례식은 어디서 진행되면 좋을까요?',
        answer_check: [],
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '당신과의 마지막 인사는 어떤 분위기에서 나누면 좋을까요?',
        answer_check: [],
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '이제 다시 자연으로 돌아갈 시간이에요. 어떤 방식으로 안장을 원하는지 말씀해주세요.',
        answer_check: [],
        answer_box: [
            {
                box_type1: [null],
                box_type2: [null],
            }
        ],
        answer_text: '',
        iscomplete: false
    },
]

const digital = [
    {
        question: '수많은 사이트의 이메일 계정을 그냥 놔둘지, 삭제할지 고민해볼까요?',
        answer_check: [],
        answer_box: [
            {
                box_type: [null],
                box_state: [null],        
                box_name: [null],
                box_selection: false,
            }
        ],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '이제는 소셜미디어(SNS) 차례에요. 당신의 기록이 담긴 계정들을 어떻게 정리할까요?',
        answer_check: [],
        answer_box: [
            {
                box_type: [null],
                box_state: [null],        
                box_name: [null],
                box_selection: false,
            }
        ],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '멋진 사진들과 영상이 많네요! 당신의 사진, 영상, 글과 파일을 어떻게 정리하면 좋을까요?',
        answer_check: [],
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
]

const pet = [
    {
        question: '마루의 친구가 있었네요! 당신 대신 반려동물을 어떻게 돌보면 좋을지 말씀해주세요.',
        answer_check: [],
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
]

const bucketlist = [
    {
        question: '세상과 이별하기 전 꼭 하고 싶은 것들을 떠올려보세요. 마루가 옆에서 당신의 버킷리스트 친구가 될게요',
        answer_check: [],
        answer_box: [
            {
                box_when: [],
                box_what: [],
                box_who: [],
            }
        ],
        answer_text: '',
        iscomplete: false
    },
]






const checklist = { health, finance, testament, funeral, digital, pet, bucketlist }
export default checklist